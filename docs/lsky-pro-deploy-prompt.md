# 任务：部署 Lsky Pro 开源版图床

## 背景说明

我们正在维护一个名为 **threetwoa-digital-garden** 的个人博客项目。该项目包含一个博客前台站点和一个后台管理系统（CMS）。用户在后台写文章时，需要插入图片。图片不能直接存入代码仓库（会膨胀），因此需要一个专门的图床服务来托管图片，文章里只保存图片的外链 URL。

Lsky Pro 是一个开源的图床程序，功能包括：
- Web 界面上传图片（拖拽、批量）
- API 接口上传（供博客后台编辑器调用）
- 相册管理、图片分类
- 缩略图、水印处理
- 多用户支持

本项目使用的是 Lsky Pro 的**开源免费版**（GitHub: lsky-org/lsky-pro），不是 299 元的商业版。

## 目标

在 DigitalOcean 服务器上部署 Lsky Pro 开源版图床，使其可以通过 HTTP API 接收图片上传请求，供博客后台调用。

## 环境信息

- **服务器提供商**：DigitalOcean
- **配置**：2 核 CPU / 4GB 内存
- **操作系统**：Linux（Ubuntu/Debian/CentOS，请自动检测）
- **部署方式**：Docker + docker-compose
- **服务端口**：8089（如果已被占用，请自动换为 8088 并告知）
- **数据库**：SQLite（无需额外安装 MySQL/PostgreSQL）
- **数据持久化**：必须配置，确保容器重启后图片和配置不丢失

## 前置条件检查

执行部署前，请先检查以下条件，如不满足请自动安装：

1. **Docker** 是否已安装
2. **docker-compose** 或 `docker compose`（v2）是否可用
3. **服务器防火墙**（ufw/firewalld/iptables）是否需要放行端口
4. **DigitalOcean Cloud Firewall**（需要在 DO 控制台手动检查，请提醒用户）

## 详细部署步骤

### Step 1：安装 Docker（如未安装）

```bash
if ! command -v docker &> /dev/null; then
    echo "=== Docker 未安装，开始安装 ==="
    # 检测发行版
    if [ -f /etc/os-release ]; then
        . /etc/os-release
        OS=$ID
    fi

    case $OS in
        ubuntu|debian)
            apt-get update
            apt-get install -y ca-certificates curl gnupg
            install -m 0755 -d /etc/apt/keyrings
            curl -fsSL https://download.docker.com/linux/$OS/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
            chmod a+r /etc/apt/keyrings/docker.gpg
            echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/$OS $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
            apt-get update
            apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
            systemctl enable docker
            systemctl start docker
            ;;
        centos|rhel|fedora|rocky|almalinux)
            yum install -y yum-utils
            yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
            yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
            systemctl enable docker
            systemctl start docker
            ;;
        *)
            echo "不支持的发行版: $OS"
            exit 1
            ;;
    esac
    echo "=== Docker 安装完成 ==="
else
    echo "=== Docker 已安装: $(docker --version) ==="
fi

# 确保 docker compose 可用
if ! docker compose version &> /dev/null; then
    if ! docker-compose version &> /dev/null; then
        echo "正在安装 docker-compose..."
        curl -L "https://github.com/docker/compose/releases/download/v2.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        chmod +x /usr/local/bin/docker-compose
    fi
fi
```

### Step 2：创建工作目录并编写 docker-compose.yml

```bash
mkdir -p /opt/lsky-pro
cd /opt/lsky-pro

# 如果端口 8089 被占用，检测并更换
PORT=8089
if ss -tlnp | grep -q ":$PORT "; then
    PORT=8088
    echo "端口 8089 已被占用，将使用端口 $PORT"
fi

cat > docker-compose.yml << EOF
version: '3'

services:
  lsky-pro:
    image: lskypro/lsky-pro:latest
    container_name: lsky-pro
    restart: unless-stopped
    ports:
      - "$PORT:8089"
    volumes:
      - ./data:/var/www/html
    environment:
      - PHP_MAX_FILE_UPLOADS=100
      - PHP_UPLOAD_MAX_FILESIZE=64M
      - PHP_POST_MAX_SIZE=64M
      - PHP_MAX_EXECUTION_TIME=300
EOF

echo "docker-compose.yml 已创建，使用端口: $PORT"
```

### Step 3：启动容器

```bash
cd /opt/lsky-pro

# 拉取镜像并启动
echo "=== 正在拉取镜像并启动 Lsky Pro ==="
docker compose up -d

# 等待服务启动
echo "等待服务初始化（约 15 秒）..."
sleep 15

# 检查容器状态
if docker ps | grep -q lsky-pro; then
    echo "=== 容器运行正常 ==="
    docker ps | grep lsky-pro
else
    echo "=== 容器未正常运行，查看日志 ==="
    docker logs lsky-pro
    exit 1
fi
```

### Step 4：检查服务可访问性

```bash
echo "=== 测试服务可访问性 ==="
# 测试本地端口
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:$PORT || echo "000")
echo "本地端口 HTTP 状态码: $HTTP_CODE"

if [ "$HTTP_CODE" = "000" ]; then
    echo "警告：本地端口无法访问，检查日志："
    docker logs --tail 30 lsky-pro
fi

# 获取公网 IP
PUBLIC_IP=$(curl -s ifconfig.me 2>/dev/null || curl -s icanhazip.com 2>/dev/null || echo "未知")
echo "服务器公网 IP: $PUBLIC_IP"
```

### Step 5：防火墙放行

```bash
echo "=== 配置防火墙 ==="

# UFW (Ubuntu/Debian)
if command -v ufw &> /dev/null; then
    ufw allow $PORT/tcp
    echo "UFW 已放行 $PORT 端口"
fi

# firewalld (CentOS/RHEL)
if command -v firewall-cmd &> /dev/null; then
    firewall-cmd --permanent --add-port=$PORT/tcp
    firewall-cmd --reload
    echo "firewalld 已放行 $PORT 端口"
fi

echo ""
echo "⚠️ 重要提醒："
echo "如果服务器使用了 DigitalOcean Cloud Firewall（云端防火墙），"
echo "还需要在 DigitalOcean 控制台手动添加规则：允许 TCP $PORT 端口入站。"
```

## 部署结果返回

请向用户返回以下信息：

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Lsky Pro 图床部署完成
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 访问地址：http://<服务器公网IP>:<端口>
📁 工作目录：/opt/lsky-pro
💾 数据目录：/opt/lsky-pro/data（持久化，重启不丢）
🐳 容器名称：lsky-pro

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ⚠️ 需要用户手动完成的步骤
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. 浏览器访问 http://<服务器公网IP>:<端口>
2. 进入安装向导：
   - 数据库类型：选择 SQLite（推荐，零配置）
   - 设置管理员账号和密码（请牢记）
3. 安装完成后，使用管理员账号登录后台
4. 进入：设置 → 接口设置
   - 开启 API 接口
   - 生成 API Token
5. 将以下信息提供给 Claude（博客项目的 AI 助手）：
   - API 基础地址：http://<服务器公网IP>:<端口>
   - API Token：<从后台复制的 Token>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📋 后续可选优化
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- 绑定域名：配合 Nginx 反代 + Cloudflare CDN
- HTTPS：Cloudflare 自动提供（开橙云即可）
- 定期备份：/opt/lsky-pro/data 目录

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## 故障排查指南

如果部署过程中遇到问题，请按以下顺序排查：

1. **容器无法启动**：
   ```bash
   docker logs lsky-pro
   ```
   检查是否有端口冲突或权限问题

2. **端口被占用**：
   ```bash
   ss -tlnp | grep <端口>
   # 修改 docker-compose.yml 中的端口映射后重启
   docker compose down && docker compose up -d
   ```

3. **无法从外部访问**：
   - 检查服务器本地防火墙（ufw/firewalld）
   - 检查云服务商防火墙（DigitalOcean Cloud Firewall）
   - 检查安全组/网络ACL

4. **数据丢失**：
   - 确认 volumes 映射正确：`./data:/var/www/html`
   - 确认 `./data` 目录存在且有写权限

## 安全提醒

- 请设置强密码作为管理员密码
- 生产环境建议配合 Nginx + HTTPS 使用
- 定期备份 `/opt/lsky-pro/data` 目录
- 不要向他人泄露 API Token
