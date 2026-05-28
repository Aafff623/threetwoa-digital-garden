# Obsidian to Blog Workflow Design Report

## 1. Current Architecture

```
[Obsidian Vault] --> [Manual Entry] --> [Blog Manager CMS UI] --> [sync.py] --> [Frontend] --> [Vercel]
```

**Current State:** No automated path from Obsidian to blog-manager. Content must be manually entered through the CMS web interface.

### Blog Manager APIs

| Endpoint | Purpose |
|----------|---------|
| `POST /api/drafts/sync_local` | Publish drafts to posts/chatters |
| `POST /api/moments/save` | Save moments |
| `POST /api/sync/execute` | Mirror to frontend |
| `POST /api/deploy/source` | Trigger Vercel deploy |

---

## 2. Gap Analysis

### Format Transformation Requirements

| Obsidian Field | Blog Equivalent | Notes |
|----------------|----------------|-------|
| `title` | `title` | Direct copy |
| `created` | `date` | Add time component (default 12:00:00) |
| `tags` | `tags` | Direct copy, array format |
| `status: approved` | - | Must be `approved` for export |
| `publish_ready: true` | - | Must be `true` for export |
| `visibility: public` | - | Filter condition |
| `blog_type` | content type | `post`, `chatter`, or `moment` |

### Missing Infrastructure

1. **No Obsidian-to-Blog-Manager bridge**: Path is断开
2. **No status-aware export**: `publish_ready` and `status` not utilized
3. **No incremental sync**: Full directory replacement in `sync.py`
4. **No image URL resolution**: Obsidian images use local paths

---

## 3. Workflow Options

### Option A: Scripted Batch Export (Recommended for Initial Setup)

**Architecture:**
```
[Obsidian Vault] --> [Python Export Script] --> [Blog Manager dirs] --> [sync.py] --> [Frontend]
```

**Implementation:**
1. Create `scripts/obsidian_export.py` that:
   - Uses folder scanning (or Dataview queries)
   - Filters notes by `publish_ready: true` and `status: approved`
   - Transforms frontmatter (see mapping table)
   - Writes to blog-manager's `posts/`, `chatters/`, `moments/` directories

2. Run manually or via scheduled task:
   ```bash
   python scripts/obsidian_export.py --vault /path/to/vault --target blog-manager
   ```

**Pros:** Simple to implement, full control, works with existing sync.py
**Cons:** Manual trigger, no real-time sync
**Effort:** Low (1-2 days)

---

### Option B: Obsidian Plugin + API Push (Hybrid)

**Architecture:**
```
[Obsidian Note save] --> [obsidian-local-rest-api webhook] --> [Blog Manager API]
```

**Implementation:**
1. Configure `obsidian-local-rest-api` to send webhook on file change
2. Create blog-manager endpoint `POST /api/obsidian/ingest`:
   - Receives note content and frontmatter
   - Validates `publish_ready` and `status`
   - Transforms and writes to appropriate directory
   - Optionally triggers sync

3. Use Templater template for blog-ready notes with `blog_type` field

**Pros:** Near real-time sync, natural Obsidian workflow
**Cons:** Requires plugin configuration, local REST API must be accessible
**Effort:** Medium (3-5 days)

---

### Option C: Git-Based Continuous Sync (Production Grade)

**Architecture:**
```
[Obsidian Git push] --> [Git webhook] --> [CI/CD Pipeline] --> [Transform] --> [Blog Manager] --> [Sync] --> [Deploy]
```

**Implementation:**
1. Configure `obsidian-git` with remote repository
2. Set up webhook on Obsidian vault repo push
3. CI pipeline (GitHub Actions) handles transformation and sync

**Pros:** Fully automated, version control, team collaboration, rollback
**Cons:** Complex setup, requires CI/CD infrastructure
**Effort:** High (1-2 weeks)

---

## 4. Recommended Approach

**Immediate:** Option A (Scripted Batch Export) to establish transformation pipeline
**Short-term:** Layer in Option B (Obsidian Plugin + API Push)
**Long-term:** Add Option C (Git-Based) elements incrementally

### Immediate Action Items

1. Create `scripts/obsidian_export.py` with:
   - Vault path configuration
   - Frontmatter transformation
   - Content type routing (posts vs chatters vs moments)
   - Dry-run mode for validation

2. Add ingestion endpoint to blog-manager:
   - `POST /api/obsidian/ingest`

3. Configure Obsidian Templater template:
   - Add `blog_type` field to frontmatter
   - Pre-fill `publish_ready: false`, `status: draft`

---

## 5. Content Type Detection Algorithm

```
IF blog_type == "moment" OR folder contains "moments" OR has location field
    --> Moment format (id, date, location, images, content)

IF blog_type == "chatter" OR folder contains "chatters" OR casual tags
    --> Chatter format (title, date, tags, mood, cover, description, content)

ELSE
    --> Post format (title, date, tags, mood, cover, description, content)
```

---

## 6. Sync Mechanism (Existing sync.py)

The `sync.py` already handles:
- Mirroring `posts/`, `chatters/`, `moments/` from blog-manager to frontend
- Syncing `app/about/about.md`, `data/albums.ts`, `data/friends.ts`, `data/projects.ts`, `siteConfig.ts`
- Filtering out sensitive fields (picBedToken) from siteConfig.ts

**New workflow should target:** `threetwoa-blog-manager/posts/`, `chatters/`, `moments/` → then call sync API

---

*Report generated: 2026-05-28*