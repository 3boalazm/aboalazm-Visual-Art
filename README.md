# Mustafa Aboalazm — Portfolio Site

A multi-page static portfolio website. Pure HTML, CSS, and a tiny bit of JavaScript. No build step, no Node.js, no framework. Open `index.html` in a browser and it works.

---

## 📁 Folder Structure

```
portfolio-site/
├── index.html              ← Home (hero + selected work)
├── about.html              ← Full about / experience / tools
├── services.html           ← Services overview + process + FAQ
├── pricing.html            ← Standalone pricing page (3 tiers + à la carte)
├── agreement.html          ← Full Work-Flow Agreement (proposal + terms)
├── contact.html            ← Contact methods + brief checklist
├── styles.css              ← Single shared design system
├── scripts.js              ← Shared scroll reveals + accordion
├── README.md               ← This file
│
├── projects/               ← Case study templates (currently inactive — home links go to Behance)
│   ├── _template.html
│   ├── nile-pharma.html
│   ├── code-canvas.html
│   ├── esfc.html
│   ├── learn-in-arabic.html
│   └── youth-scope.html
│
└── images/                 ← Drop your real project images here
```

**Note on project links:** Until you upload real project images, the project cards on the home page link to your **Behance profile** so visitors don't hit empty case studies. To re-enable a case study, change the card's `href` in `index.html` from `https://www.behance.net/aboalazm` back to `projects/<filename>.html`.

---

## 🚀 Run It Locally

Just double-click `index.html` and your browser opens it.

For a smoother dev experience, open the folder in **VS Code** and install the **"Live Server"** extension — right-click `index.html` → "Open with Live Server".

---

## ✏️ How to Edit

### Change colors or fonts (across the entire site)
Open `styles.css`. The first 20 lines define the whole design system:

```css
:root {
  --bg: #0a0908;          /* Background */
  --ink: #f4f1ec;         /* Main text */
  --accent: #ff6b47;      /* Coral accent — change for a different vibe */
  ...
}
```

Edit any value here and the whole site updates.

### Edit page text
Each page is a single `.html` file. Open in VS Code and edit between the tags.

### Update the navigation
The nav HTML is repeated at the top of every page (no JS magic). To change it, use VS Code's **Find in Files** (`Cmd/Ctrl + Shift + F`) to update across all files at once.

---

## 📦 Add a New Project

1. `cp projects/_template.html projects/my-new-project.html`
2. Edit the `[EDIT]` markers inside.
3. Replace placeholder `<div class="case-img-placeholder">` blocks with `<img src="../images/your-image.jpg" alt="...">`.
4. Add a card on the home page (`index.html`) — copy an existing project card in `<div class="project-grid">` and update href.

---

## 🖼️ Image Sizes

- **Hero / wide:** 2100 × 900px (21:9)
- **Square:** 1200 × 1200px
- **Tall:** 1000 × 1250px (4:5)

Compress with [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app) — keep under 300KB.

---

## 🌐 Deploy to GitHub Pages — Step by Step

GitHub Pages is the easiest free way to host this site.

### Option A — Clean URL (recommended): `https://3boalazm.github.io`

This requires the repo to be named **exactly** `<your-username>.github.io`.

**1. Create the repo**
- Go to https://github.com/new
- **Repository name:** `3boalazm.github.io` (replace `3boalazm` with your actual GitHub username if different)
- **Public** (required for free GitHub Pages)
- **Do NOT** check "Add a README file" — you already have one
- Click **Create repository**

**2. Upload the files**
- On the empty repo page, click the link that says **"uploading an existing file"**
- Open the unzipped `portfolio-site/` folder on your computer
- **Select all files INSIDE** `portfolio-site/` (not the folder itself — open it first, then select everything)
  - On Mac: `Cmd + A` inside the folder
  - On Windows: `Ctrl + A` inside the folder
- **Drag them onto the GitHub upload area**
- Important: After upload, you should see `index.html`, `styles.css`, etc. **at the top level** of the repo — NOT inside a `portfolio-site/` subfolder
- At the bottom, write a commit message like `"Initial site"` and click **Commit changes**

**3. Wait 1–2 minutes**
- GitHub builds the site automatically when the repo is named `<username>.github.io`
- Visit `https://3boalazm.github.io` — your site is live

### Option B — Keep it as a regular repo: `https://3boalazm.github.io/portfolio-site/`

If you prefer to name the repo something else (like `portfolio` or `portfolio-site`):

**1. Create the repo**
- https://github.com/new
- **Repository name:** anything you like (e.g. `portfolio-site`)
- **Public**
- Do NOT check Add README
- Create

**2. Upload files** (same as Option A, step 2)

**3. Enable GitHub Pages**
- In the repo, click **Settings** (top-right tab)
- Left sidebar → **Pages**
- Under **"Source"**, choose **Deploy from a branch**
- Under **"Branch"**, select `main` and `/ (root)` then click **Save**
- Wait 1–2 minutes
- Your site goes live at `https://3boalazm.github.io/portfolio-site/` (the URL appears at the top of the Pages settings)

---

## 🌍 Use a Custom Domain

After GitHub Pages is live:

1. Buy a domain at [Namecheap](https://www.namecheap.com) or [Cloudflare](https://www.cloudflare.com/products/registrar/) — usually $8–15/year
2. In your repo: **Settings → Pages → Custom domain** → enter your domain → Save
3. In your domain registrar's DNS settings, add these records:
   - Type: `A` · Host: `@` · Values: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Type: `CNAME` · Host: `www` · Value: `3boalazm.github.io`
4. Wait up to 24 hours (usually 10 minutes) for DNS propagation
5. Back in GitHub Pages settings, check **Enforce HTTPS**

---

## 🌐 Alternative Hosts (no GitHub needed)

### Netlify Drop (drag and drop, fastest)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `portfolio-site/` folder onto the page
3. Done. Free URL like `random-name-123.netlify.app` — and you can change the subdomain in settings

### Vercel
1. Push to GitHub (Option B above)
2. Go to [vercel.com](https://vercel.com), click "Add New" → import the repo
3. Click Deploy. Done.

---

## 🛠️ Quick Tweaks

### Change the accent color
In `styles.css`:
```css
--accent: #ff6b47;          /* old: coral */
--accent: #d4a557;          /* new: gold */
--accent-soft: rgba(212, 165, 87, 0.12);
```

### Update prices
Edit `pricing.html` and `agreement.html`. Search for the dollar amount and replace.

### Hide a project on the home page
In `index.html`, find the `<div class="project-grid">` block. Each project is a single `<a class="project">...</a>` block. Comment out with `<!-- ... -->` to hide.

---

## 🧰 Tech Stack

- **HTML5** — semantic, accessible
- **CSS3** — custom properties, Grid, Flexbox, no preprocessor
- **Vanilla JavaScript** — IntersectionObserver for reveals, ~30 lines
- **Google Fonts** — Instrument Serif, Inter Tight, JetBrains Mono, IBM Plex Sans Arabic
- **Zero dependencies. Zero build steps.**

---

**© 2026 Mustafa Aboalazm**
