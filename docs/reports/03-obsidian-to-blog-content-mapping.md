# Obsidian to Blog Content Mapping Report

**Source:** `D:\OneDrive\Desktop\Notes\threetwoa_ob`
**Target:** `D:\OneDrive\Desktop\threetwoa\threetwoa-digital-garden`

---

## 1. Content Type Definitions

### Blog Content Types (Target)

| Type | Path | Purpose | Frontmatter Fields |
|------|------|---------|-------------------|
| **posts** | `frontend/posts/*.md` | Long-form articles | `title`, `date`, `slug`, `cover`, `description`, `tags`, `mood` |
| **chatters** | `frontend/chatters/*.md` | Short thoughts/essays | `title`, `date`, `tags`, `mood`, `cover`, `description` |
| **moments** | `frontend/moments/*.md` | Brief moments/instant thoughts | `id`, `date`, `location`, `images` |
| **about** | `frontend/app/about/about.md` | About page | `title`, `date`, `tags`, `mood`, `cover`, `description` |

### Obsidian Content Folders → Blog Type Mapping

| Blog Type | Obsidian Source | Content Characteristics |
|-----------|----------------|--------------------------|
| **posts** | `01_Code/`, `04_Courses&VideoNotes/`, `07_Reading&Thinking/` | Long-form (1000+ words), structured with `##` headings, callouts, Mermaid diagrams |
| **chatters** | `02_AI_Coding&Agents/`, `06_Me&Growth/`, `07_Reading&Thinking/` | Medium-length (300-1000 words), reflective/personal, topical essays |
| **moments** | `00_Inbox/` | Brief captures (<300 words), quick thoughts, links, raw observations |
| **about** | `06_Me&Growth/about/` | Personal bio information |

---

## 2. Frontmatter Transformation

### Blog Frontmatter (posts)

```yaml
title: "Post Title"
date: '2026-03-26 07:00:00'
tags: [学术, 深度学习]
mood: ""
cover: https://example.com/image.jpg
description: "Post summary"
```

### Blog Frontmatter (moments)

```yaml
id: "moment-1777128883968"
date: "2026-04-25T14:54:43.968Z"
location: "江西省 南昌市"
images:
  - 'https://example.com/img1.jpg'
```

### Obsidian Frontmatter

```yaml
title: "笔记标题"
created: 2026-05-27
updated: 2026-05-27
status: approved
visibility: public
publish_ready: true
tags: [标签1, 标签2]
```

### Field Mapping Table

| Blog Field | Obsidian Equivalent | Transform Required |
|------------|--------------------|--------------------|
| `title` | `title` | Direct copy |
| `date` | `created` | Yes - format conversion (YYYY-MM-DD HH:MM:SS) |
| `tags` | `tags` | Direct copy |
| `cover` | N/A | Extract from `![[...]]` or use default |
| `description` | `source` or first line | Extract from content |
| `mood` | N/A | Not available, use "" or map from tags |
| `status` | `status` / `publish_ready` | `approved` + `visibility: public` → publish |
| `id` | (new) | Generate from timestamp for moments |
| `location` | N/A | Only for moments |

---

## 3. Content Transformation Rules

### Image References

**Obsidian:** `![[filename.png]]` or `![[image.jpg|600]]`
**Blog:** `![](https://external-url.com/image.png)`

**Action:** Images in Obsidian are local. Options:
- A: Upload to external hosting and replace URLs
- B: Copy local images to blog assets folder
- C: Leave as-is if blog supports Obsidian-style image resolution

### Callout Blocks

**Obsidian:**
```markdown
> *📌 核心结论是...*
> *🐱 就像...*
> *💡 实操时注意...*
```
**Blog:** Standard blockquotes or HTML comments

### Internal Links

**Obsidian:** `[[note-title]]` or `[[folder/note|Display Text]]`
**Blog:** `[Display Text](https://example.com/note-title)` or external URL

**Action:** Convert internal wiki links to external URLs or discard.

### Mermaid Diagrams

**Obsidian/Blog:** Generally supported, preserve as-is.

### Highlight Syntax

**Obsidian:** `==highlighted text==`
**Blog:** Convert to `<mark>` or `**bold**`

---

## 4. Content Type Detection Rules

```
IF folder contains "moments" OR has location field OR blog_type == "moment"
    --> Moment format (id, date, location, images, content)

IF folder contains "chatters" OR casual tags OR blog_type == "chatter"
    --> Chatter format (title, date, tags, mood, cover, description, content)

ELSE
    --> Post format (title, date, tags, mood, cover, description, content)
```

---

## 5. Migration Priority

| Priority | Content | Rationale |
|----------|---------|-----------|
| **HIGH** | `07_Reading&Thinking/` - Industry analysis | Publishable long-form content |
| **HIGH** | `04_Courses&VideoNotes/` - Course summaries | Structured learning content |
| **MEDIUM** | `01_Code/` - Technical notes | Requires review for blog-appropriate depth |
| **MEDIUM** | `02_AI_Coding&Agents/` - Methodology | AI-focused reflective content |
| **LOW** | `06_Me&Growth/` - Personal | May not be intended for public blog |
| **LOW** | `00_Inbox/` | Often incomplete, needs review |

---

## 6. Sample Transformations

### Sample 1: Long-form Article

**Obsidian:** `07_Reading&Thinking/AI产业观察/AI产业链十二层框架.md`
- Type: 读书笔记, Status: 完成, Length: ~2000 words
- Contains: Mermaid diagram, callouts, structured sections

**Mapping:** -> `posts/ai-industry-12-layer-framework.md`

**Transform frontmatter:**
```yaml
# Obsidian (Before)
title: "AI产业链十二层框架：停更两年恍如隔世"
type: 读书笔记
status: 完成
created: 2026-05-27
source: "https://bibigpt.co/video/BV1U1RTBTEVa"
tags: [AI产业链, AI原生公司, 创业趋势]

# Blog (After)
title: "AI产业链十二层框架：停更两年恍如隔世"
date: '2026-05-27 12:00:00'
description: "AI的竞争重心正在从少数硬科技公司，转向千行百业的组织方式..."
tags: ["AI产业链", "AI原生公司", "创业趋势"]
cover: "https://bu.dusays.com/2026/03/24/69c1e38b4c370.jpg"
mood: ""
```

### Sample 2: Brief Moment

**Obsidian:** `00_Inbox/当你打开小红书.md`
- Status: done, Length: ~300 words
- Contains: Video summary, structured notes

**Mapping:** -> `moments/when-you-open-xiaohongshu.md`