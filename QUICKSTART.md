# Quick Start Guide

## 1️⃣ Prerequisites

- Python 3.10+
- Node.js 18.x+
- Git

## 2️⃣ Installation (Choose One)

### Option A: Automatic Setup (Recommended)

**Linux/Mac:**
```bash
chmod +x setup.sh
./setup.sh
```

**Windows:**
```cmd
setup.bat
```

This will automatically:
- Create Python virtual environment
- Install all dependencies
- Build Tailwind CSS
- Create .env file

### Option B: Manual Setup

```bash
# Clone repo
git clone https://github.com/rithinkrishnakv/portfolio.git
cd portfolio

# Create & activate virtual environment
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
npm install

# Build CSS
npm run build:css

# Create .env
cp .env.example .env
```

## 3️⃣ Customize Your Portfolio

### Edit `app.py`:

1. **Update PROJECTS** — Add your repos/work
2. **Update CONTACT_INFO** — Add your social links
3. **Update ABOUT_TEXT** — Your bio and status

### Add Profile Photo:

Place your photo at: `static/img/rithin.jpg`

## 4️⃣ Run Locally

```bash
npm run dev
```

Visit: `http://localhost:5000`

## 5️⃣ Deploy

### To Render.com:
1. Push to GitHub
2. Go to render.com → New Web Service
3. Connect your repo
4. Deploy (auto-detects render.yaml)

### To Vercel:
1. Push to GitHub
2. Go to vercel.com → Import Project
3. Deploy (auto-detects vercel.json)

### Local Server:
```bash
npm run build:css
gunicorn wsgi:app
```

## 📝 File Checklist

Before deploying:
- [ ] Profile photo at `static/img/rithin.jpg`
- [ ] Updated PROJECTS in `app.py`
- [ ] Updated CONTACT_INFO in `app.py`
- [ ] Updated ABOUT_TEXT in `app.py`
- [ ] Social links in footer
- [ ] Tested locally: `npm run dev`
- [ ] Dark/light mode works
- [ ] Form submission works
- [ ] All links work

## 🐛 Common Issues

**Port 5000 in use:**
```bash
# Edit app.py, change port to 5001
app.run(port=5001)
```

**CSS not building:**
```bash
npm run build:css
```

**Module not found:**
```bash
pip install -r requirements.txt
npm install
```

## 🎯 Project Structure

```
portfolio/
├── app.py              # Edit this for your info
├── templates/index.html
├── static/
│   ├── css/
│   ├── js/
│   └── img/rithin.jpg  # Add your photo here
├── requirements.txt
└── package.json
```

## 📚 Documentation

Full docs in `README.md`

## 🚀 You're Ready!

Your portfolio is now live and ready to customize. Good luck! 🎉
