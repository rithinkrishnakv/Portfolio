# 🎯 PORTFOLIO QUICK REFERENCE

## 🚀 60-SECOND SETUP

```bash
# 1. Setup (auto-installs everything)
./setup.sh          # Linux/Mac
setup.bat           # Windows

# 2. Edit your info
nano app.py         # Update PROJECTS, CONTACT_INFO, ABOUT_TEXT

# 3. Add your photo
cp your-photo.jpg static/img/rithin.jpg

# 4. Test
npm run dev
# Visit: http://localhost:5000
```

---

## 📝 WHAT TO EDIT

### In `app.py`:

**PROJECTS** (line ~15)
```python
PROJECTS = [
    {
        'name': 'Your Project Name',
        'url': 'https://github.com/yourname/repo',
        'category': 'Security Tool',  # or 'CTF & Research'
        'icon': 'fas fa-code',
        'description': 'Your description',
        'tags': ['Python', 'VAPT']
    }
]
```

**CONTACT_INFO** (line ~40)
```python
CONTACT_INFO = {
    'email': 'your@email.com',
    'location': 'Your Location',
    'links': {
        'github': 'https://github.com/yourname',
        'linkedin': 'https://linkedin.com/in/yourname',
        'twitter': 'https://x.com/yourname',
        'medium': 'https://medium.com/@yourname',
        'tryhackme': 'https://tryhackme.com/p/yourname'
    }
}
```

**ABOUT_TEXT** (line ~60)
```python
ABOUT_TEXT = {
    'bio_short': 'Your 1-line bio',
    'bio_long': 'Your longer bio\n\nWith paragraphs separated by \n\n',
    'status': 'Available for opportunities',
    'streak': '100-day streak'
}
```

---

## 🎨 CUSTOMIZE COLORS

Edit `static/css/main.css` line ~7:

```css
:root {
  --void: #05070a;          /* Background dark */
  --cyan: #5ee4ff;          /* Primary accent */
  --green: #3dffb0;         /* Success color */
  --violet: #9b87ff;        /* Secondary accent */
  --ink: #eef3f8;           /* Text color */
}
```

Light mode colors auto-invert. Change the dark ones to customize the whole site.

---

## 📂 FILE LOCATIONS

| File | Purpose |
|------|---------|
| `app.py` | **EDIT THIS FIRST** - Your info, projects, contact |
| `static/img/rithin.jpg` | Your profile photo |
| `static/css/main.css` | Component styles + colors |
| `templates/index.html` | HTML structure |
| `static/js/main.js` | Interactive features |

---

## 🌐 DEPLOYMENT

### Render.com (Easiest)
1. Push to GitHub
2. Go to render.com
3. New Web Service → Connect GitHub
4. Done! (renders auto-detect render.yaml)

### Vercel
1. Push to GitHub
2. Go to vercel.com
3. Import Project → Connect GitHub
4. Done! (auto-detect vercel.json)

### Local VPS
```bash
npm run build:css
pip install -r requirements.txt
gunicorn wsgi:app --bind 0.0.0.0:8000
```

---

## 🔧 COMMON COMMANDS

```bash
npm run dev           # Start dev server (auto-rebuild CSS)
npm run build:css     # Build CSS once
npm run watch:css     # Watch CSS for changes
npm run production    # Production build
python app.py         # Run Flask directly (dev only)
gunicorn wsgi:app     # Run with Gunicorn (production)
```

---

## ✅ BEFORE YOU DEPLOY

- [ ] Profile photo at `static/img/rithin.jpg`
- [ ] `app.py` updated with your info
- [ ] All project URLs correct
- [ ] Email address correct
- [ ] Social links correct
- [ ] Tested with `npm run dev`
- [ ] Dark mode works (moon icon in nav)
- [ ] Light mode works (sun icon)
- [ ] Mobile responsive (resize to 375px)
- [ ] No console errors (F12 → Console)
- [ ] All links work (open in new tab)

---

## 🆘 TROUBLESHOOTING

| Problem | Fix |
|---------|-----|
| Port 5000 in use | Change to 5001 in app.py |
| CSS not updating | `npm run build:css` |
| Broken imports | `pip install -r requirements.txt` |
| Image not showing | Check `static/img/rithin.jpg` exists |
| No email client | Set email app as default |
| Node modules broken | `rm -rf node_modules && npm install` |

---

## 📱 RESPONSIVE BREAKPOINTS

- **Mobile:** 320px - 768px (test at 375px)
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px - 1920px
- **Ultra:** 1920px+

All fully supported!

---

## 🎯 PROJECT CATEGORIES

Use only these in PROJECTS array:
- `'Security Tool'` — Your tools/frameworks
- `'CTF & Research'` — Write-ups and research

Filter pills will auto-generate from these.

---

## 📲 ICON REFERENCE

Font Awesome icons for projects:
- `'fas fa-code'` — Code
- `'fas fa-shield-halved'` — Security
- `'fas fa-bug'` — Bug/CTF
- `'fas fa-microchip'` — Chip/Tool
- `'fab fa-github'` — GitHub
- `'fab fa-medium'` — Medium
- [See Font Awesome](https://fontawesome.com/icons)

---

## 🔐 SECURITY

- ✓ No API keys exposed
- ✓ No GitHub tokens needed
- ✓ Environment variables in .env
- ✓ Debug=False in production
- ✓ SECRET_KEY randomized

Before deploy: Set `DEBUG=False` in .env

---

## 📊 PROJECT STRUCTURE

```
portfolio/
├── app.py                 ← EDIT HERE
├── templates/index.html
├── static/
│   ├── css/main.css
│   ├── js/
│   └── img/rithin.jpg     ← ADD YOUR PHOTO
├── README.md
├── QUICKSTART.md
└── DEPLOYMENT.md
```

---

## 💡 PRO TIPS

1. **Projects Auto-Sort** — List in priority order, they'll display that way
2. **Tags Appear** — Use tech you know, tags display under each project
3. **Dark Mode Saves** — User's preference persists via localStorage
4. **Form Opens Email** — Fill form → clicks send → opens your email client
5. **Copy to Clipboard** — Click email in contact section to copy
6. **Animations Smooth** — 60fps, GPU-accelerated
7. **Mobile First** — Designed for phones, scales up beautifully
8. **SEO Ready** — Sitemap & robots.txt auto-generated

---

## 🎓 LEARNING RESOURCES

- **CSS:** `static/css/main.css` (1100 lines, well-commented)
- **JS:** `static/js/main.js` (450 lines, simple vanilla)
- **Flask:** `app.py` (100 lines, straightforward)
- **HTML:** `templates/index.html` (Jinja2 templating)

All code is readable, commented, and beginner-friendly.

---

## 📞 NEED HELP?

1. Check **README.md** — Full documentation
2. Check **QUICKSTART.md** — 5-minute setup
3. Check **DEPLOYMENT.md** — Deployment guide
4. Read code comments — Extensive throughout
5. Check browser console — F12 for errors

---

## ✨ YOU'RE READY!

This is a **production-grade portfolio**. Everything works. Everything is documented.

**1. Run setup script**
**2. Edit app.py**
**3. Add your photo**
**4. Deploy**

That's it. You're live.

---

**Built with ❤️ and Liquid Glass Design**

Last Updated: June 2025
