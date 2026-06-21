# Rithin Krishna K V — Portfolio

Personal portfolio site built to showcase my work in cybersecurity research, VAPT, and CTF write-ups. Built with Flask on the backend and a custom glassmorphism design system on the frontend.

**Live site:**[ _add your deployed URL here_](https://rithinkrishnakv.vercel.app/)

## Features

- **Responsive design** — works cleanly across desktop, tablet, and mobile
- **Liquid Glass UI** — custom glassmorphism with specular highlighting, depth layering, and smooth motion
- **Dark / light mode** — toggleable theme with persistence across visits
- **Project filtering** — sort by Security Tools vs CTF & Research
- **Config-driven content** — projects, contact info, and bio are all defined in `app.py`, so updates don't touch the frontend code
- **Contact integration** — direct email link with copy-to-clipboard, plus a message form
- **Zero external API dependencies** — no GitHub API calls, no rate limits, no exposed tokens

## Tech Stack

- **Backend:** Python, Flask
- **Frontend:** HTML5, CSS3, vanilla JavaScript
- **Styling:** Tailwind CSS + custom component styles
- **Icons:** Font Awesome
- **Fonts:** Clash Display, General Sans, JetBrains Mono
- **Production server:** Gunicorn

## Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/rithinkrishnakv/portfolio.git
cd portfolio
```

### 2. Set up a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
npm install
```

### 4. Configure environment variables

```bash
cp .env.example .env
```

### 5. Build CSS and run

```bash
npm run dev
```

Visit `http://localhost:5000`

## Project Structure

```
portfolio/
├── app.py                  # Flask app — projects, contact info, bio all live here
├── wsgi.py                 # Gunicorn entry point for production
├── requirements.txt        # Python dependencies
├── package.json             # npm scripts (CSS build, dev server)
├── tailwind.config.js       # Tailwind theme tokens
├── render.yaml               # Render.com deployment config
├── vercel.json               # Vercel deployment config
│
├── templates/
│   ├── index.html          # Main page
│   ├── base.html           # Shared layout for error pages
│   ├── 404.html
│   ├── 500.html
│   ├── sitemap.xml
│   └── robots.txt
│
└── static/
    ├── css/
    │   ├── main.css         # All component styles
    │   └── input.css        # Tailwind source
    ├── js/
    │   ├── main.js          # Navigation, theme toggle, animations
    │   └── projects.js      # Project card rendering
    ├── img/
    │   ├── profile-photo.jpg # Profile photo (.jpg only)
    │   └── site-icon.png     # Site icon (.png only)
    └── docs/
        └── resume.pdf        # Resume download
```

## Customization

### Adding a new project

Open `app.py` and add a new entry to the `PROJECTS` list:

```python
{
    'name': 'your-repo-name',
    'url': 'https://github.com/rithinkrishnakv/your-repo-name',
    'category': 'Security Tool',   # or 'CTF & Research'
    'icon': 'fas fa-shield-halved',
    'description': 'What it does.',
    'tags': ['Python', 'VAPT']
}
```

Save, redeploy. No frontend code needs to change — the project grid renders straight from this list.

### Updating contact info

Edit the `CONTACT_INFO` dictionary in `app.py`:

```python
CONTACT_INFO = {
    'email': 'your@email.com',
    'location': 'Your City, Country',
    'links': {
        'github': 'https://github.com/yourname',
        'linkedin': 'https://linkedin.com/in/yourname',
        'twitter': 'https://x.com/yourname',
        'medium': 'https://medium.com/@yourname',
        'tryhackme': 'https://tryhackme.com/p/yourname'
    }
}
```

### Updating bio / status

Edit `ABOUT_TEXT` in `app.py` — `bio_short` is the one-liner under your name, `bio_long` is the About section (separate paragraphs with `\n\n`).

### Swapping photo, favicon, or resume

Replace the files directly, keeping the same names:

| Asset | Path | Format |
|---|---|---|
| Profile photo | `static/img/profile-photo.jpg` | `.jpg` only |
| Site icon | `static/img/site-icon.png` | `.png` only |
| Resume | `static/docs/resume.pdf` | `.pdf` |

No code changes required — just overwrite and redeploy.

## Deployment

### Render.com (recommended)

1. Push this repo to GitHub
2. Go to [render.com](https://render.com) → **New Web Service**
3. Connect the repo — Render auto-detects `render.yaml`
4. Deploy

### Vercel

1. Push to GitHub
2. Import the repo at [vercel.com](https://vercel.com) — auto-detects `vercel.json`
3. Deploy

### Self-hosted / VPS

```bash
npm run build:css
gunicorn wsgi:app --bind 0.0.0.0:8000
```

## Browser Support

Tested on current versions of Chrome, Firefox, Safari, and Edge, including mobile Safari and Chrome on Android.

## License

MIT — see [LICENSE](LICENSE)

## Contact

- **Email:** rithinkrishnakv@gmail.com
- **LinkedIn:** [linkedin.com/in/rithin-krishna](https://linkedin.com/in/rithin-krishna)
- **GitHub:** [github.com/rithinkrishnakv](https://github.com/rithinkrishnakv)
- **X:** [@RithinSec](https://x.com/RithinSec)
