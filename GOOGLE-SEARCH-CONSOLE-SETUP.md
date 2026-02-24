# Google Search Console Setup — ketanshukla.com

## Step-by-Step Setup

### Step 1: Go to Google Search Console

1. Open **https://search.google.com/search-console/about**
2. Click **"Start now"**
3. Sign in with the same Google account you used for metronagon.com

### Step 2: Add Your Property

1. Choose **"URL prefix"**
2. Enter: `https://www.ketanshukla.com`
3. Click **"Continue"**

> **Important:** Use `www.ketanshukla.com` (with www) because your domain redirects `ketanshukla.com` → `www.ketanshukla.com`. The canonical must match the redirect target.

### Step 3: Verify Ownership

Use the same method you used for metronagon.com:

**HTML file upload:**
1. Google gives you a file like `googleXXXXXXXXXXXXXXXX.html`
2. Place it in `E:\author-portfolio\public\`
3. It will be accessible at `https://www.ketanshukla.com/googleXXXXXXXXXXXXXXXX.html`
4. Commit and push to GitHub → Vercel auto-deploys
5. Wait 1-2 minutes, then click **"Verify"** in Google Search Console

**Alternative — HTML meta tag:**
1. Google gives you a meta tag like: `<meta name="google-site-verification" content="XXXXXXXX" />`
2. Tell Cascade the content value and it will be added to `layout.tsx` metadata

### Step 4: Submit Your Sitemap

1. In the left sidebar, click **"Sitemaps"**
2. Enter: `sitemap.xml`
3. Click **"Submit"**
4. Full URL: `https://www.ketanshukla.com/sitemap.xml`

### Step 5: Request Indexing

1. In the left sidebar, click **"URL Inspection"**
2. Paste: `https://www.ketanshukla.com/`
3. Click **"Request Indexing"**

Since this is a single-page site, you only need to request indexing for one URL.

---

## What Your Sitemap Contains

Your `sitemap.ts` generates a sitemap with one URL:

| URL | Priority | Change Frequency |
|-----|----------|-----------------|
| `https://www.ketanshukla.com` | 1.0 | monthly |

## What Your robots.txt Allows

Your `robots.ts` generates:

```
User-agent: *
Allow: /

Sitemap: https://www.ketanshukla.com/sitemap.xml
```

All pages are crawlable. No pages are blocked.

---

## Timeline Expectations

| Milestone | Expected Time |
|-----------|--------------|
| Sitemap submitted | Day 1 |
| Page indexed | 2-7 days |
| Search impressions visible | 1-2 weeks |
| Organic clicks begin | 2-8 weeks |

---

## Troubleshooting

**"URL is not on Google"** — Normal for a new submission. Request indexing and wait.

**"Crawled - currently not indexed"** — Google found the page but hasn't indexed it yet. Usually resolves on its own. Backlinks from metronagon.com and the 3 series subdomains will help.

**Sitemap shows "Couldn't fetch"** — Verify `https://www.ketanshukla.com/sitemap.xml` loads in a browser.
