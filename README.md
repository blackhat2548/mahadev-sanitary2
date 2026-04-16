# Mahadev Sanitary — Website

Premium, animated multi-page website for **Mahadev Sanitary**, Surat's most trusted plumbing & sanitary store. Pure HTML/CSS/JavaScript — no backend, no build tools, GitHub Pages ready.

---

## 📁 What's Inside

```
mahadev-sanitary/
├── index.html          # Homepage (hero, stats, features, brands, categories, testimonials)
├── products.html       # Product catalog with category filters + enquire modal
├── consultancy.html    # Malik Plumbing Services page with process timeline
├── contact.html        # Contact cards, Google Map, hours, enquiry form
├── css/
│   ├── style.css       # All main styles
│   └── animations.css  # Custom keyframes & animation utilities
├── js/
│   ├── main.js         # Navbar, mobile menu, shared utilities, counters, modal
│   ├── animations.js   # GSAP hero text animation, timeline progress
│   └── products.js     # Product filtering logic
└── README.md
```

---

## 🎨 Features

- **GSAP 3** — word-by-word hero text animation, timeline progress, count-ups
- **AOS.js** — scroll-triggered fade-up animations on every section
- **Vanilla Tilt** — 3D tilt effect on every card
- **Pure CSS animations** — floating hero shapes, water ripples, brand marquee, pulsing glows
- **Frosted-glass navbar** on scroll
- **Animated modal** for product enquiries
- **Floating WhatsApp button** with pulse rings
- **Fully responsive** — desktop, tablet, and mobile
- **Reduced-motion support** for accessibility

---

## 🚀 Local Preview

No build step needed. Just open `index.html` in your browser, or for best results run a simple local server:

**Option A — Python (already installed on most systems):**
```bash
cd mahadev-sanitary
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

**Option B — VS Code:** Install the "Live Server" extension, right-click `index.html`, choose *Open with Live Server*.

---

## 🌐 Hosting on GitHub Pages (Free, Step-by-Step)

### Step 1 — Create a GitHub account
If you don't have one, sign up at [github.com](https://github.com). It's free.

### Step 2 — Create a new repository
1. Click the **+** icon (top right) → **New repository**.
2. **Repository name:** `mahadev-sanitary` (or anything you like).
3. Keep it **Public**.
4. Click **Create repository**.

### Step 3 — Upload the website files
**Easy way (no Git required):**
1. On the new empty repo page, click **uploading an existing file**.
2. Drag the entire `mahadev-sanitary` folder contents (all files and the `css`/`js` folders) into the browser window.
   - ⚠️ **Important:** upload the *contents* of the `mahadev-sanitary` folder, not the folder itself. `index.html` must be at the root of the repo.
3. Scroll down, write a commit message like "Initial website upload", click **Commit changes**.

### Step 4 — Enable GitHub Pages
1. In your repository, click **Settings** (top nav).
2. In the left sidebar, click **Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Under **Branch**, select `main` and folder `/ (root)`. Click **Save**.
5. Wait 1–2 minutes.

### Step 5 — Visit your live site!
Your website will be live at:
```
https://YOUR-USERNAME.github.io/mahadev-sanitary/
```
(replace `YOUR-USERNAME` with your actual GitHub username)

### Step 6 — Making changes
Any file you edit or upload to the repo will update the live site within 1–2 minutes automatically.

---

## 🔗 Using a Custom Domain (Optional)

If you own a domain (e.g., `mahadevsanitary.com`):
1. In repo **Settings → Pages**, enter your domain under **Custom domain**.
2. In your domain registrar (GoDaddy / Namecheap / etc.), add these DNS records:
   - Type `A` → `185.199.108.153`
   - Type `A` → `185.199.109.153`
   - Type `A` → `185.199.110.153`
   - Type `A` → `185.199.111.153`
3. Back on GitHub, tick **Enforce HTTPS** (wait a few minutes for the certificate to be issued).

---

## ✏️ How to Edit Content

All content is plain HTML — open any `.html` file in a text editor (Notepad / VS Code / Sublime) and edit directly.

**Common edits:**
- **Phone number:** search-and-replace `9558716104` across all HTML files.
- **Address:** search for `Atlanta Business Hub` and update.
- **Malik Plumbing phone:** search for `9067858832` in `consultancy.html`.
- **Add a product:** copy any `<div class="product-card">` block in `products.html` and update the text/category.
- **Change colors:** edit the CSS variables at the top of `css/style.css`.

---

## 📞 Contact (In the Website)

- **Mahadev Sanitary** — +91 9558716104 (Call / WhatsApp)
- **Address** — Shop No. 24, Atlanta Business Hub, Surat, Gujarat – 395007
- **Hours** — Mon–Sat: 9AM–8PM, Sun: 10AM–5PM
- **Malik Plumbing (Consultancy)** — Janmejay Malik, +91 9067858832

---

## ⚙️ Tech Stack

- HTML5 semantic markup
- CSS3 (Grid, Flexbox, custom properties, keyframes, `backdrop-filter`)
- Vanilla JavaScript (ES6+)
- **CDN libraries:**
  - GSAP 3.12.5 + ScrollTrigger
  - AOS 2.3.4
  - Vanilla Tilt 1.8.1
  - Font Awesome 6.5.1
  - Google Fonts (Poppins + Inter)

No backend. No database. No build step. Just open and go.

---

© 2025 Mahadev Sanitary. All Rights Reserved.
