#!/bin/bash

# ═══════════════════════════════════════════════════════
# Portfolio Setup Script
# Automatically installs dependencies and initializes project
# ═══════════════════════════════════════════════════════

set -e

echo "╔════════════════════════════════════════════════════════╗"
echo "║     Rithin's Cybersecurity Portfolio Setup             ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check Python
echo -e "${BLUE}Checking Python...${NC}"
if ! command -v python3 &> /dev/null; then
    echo -e "${RED}❌ Python 3 not found. Please install Python 3.10+${NC}"
    exit 1
fi
python_version=$(python3 -c 'import sys; print(".".join(map(str, sys.version_info[:2])))')
echo -e "${GREEN}✓ Python $python_version found${NC}"

# Check Node
echo -e "${BLUE}Checking Node.js...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js not found. Please install Node.js 18.x+${NC}"
    exit 1
fi
node_version=$(node -v)
echo -e "${GREEN}✓ $node_version found${NC}"

# Create virtual environment
echo ""
echo -e "${BLUE}Setting up Python virtual environment...${NC}"
if [ ! -d "venv" ]; then
    python3 -m venv venv
    echo -e "${GREEN}✓ Virtual environment created${NC}"
else
    echo -e "${YELLOW}⚠ Virtual environment already exists${NC}"
fi

# Activate venv
source venv/bin/activate 2>/dev/null || . venv/Scripts/activate 2>/dev/null

# Install Python dependencies
echo ""
echo -e "${BLUE}Installing Python dependencies...${NC}"
pip install -q -r requirements.txt
echo -e "${GREEN}✓ Python dependencies installed${NC}"

# Install Node dependencies
echo ""
echo -e "${BLUE}Installing Node.js dependencies...${NC}"
npm install -q
echo -e "${GREEN}✓ Node.js dependencies installed${NC}"

# Build CSS
echo ""
echo -e "${BLUE}Building Tailwind CSS...${NC}"
npm run build:css > /dev/null 2>&1
echo -e "${GREEN}✓ CSS built successfully${NC}"

# Create .env if it doesn't exist
if [ ! -f ".env" ]; then
    echo ""
    echo -e "${BLUE}Creating .env file...${NC}"
    cp .env.example .env
    echo -e "${GREEN}✓ .env file created${NC}"
else
    echo -e "${YELLOW}⚠ .env already exists${NC}"
fi

# Final instructions
echo ""
echo "╔════════════════════════════════════════════════════════╗"
echo "║     ✓ Setup Complete!                                 ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo "1. Add your profile photo to: static/img/rithin.jpg"
echo "2. Update your information in: app.py"
echo "3. Start development server:"
echo ""
echo -e "${GREEN}   npm run dev${NC}"
echo ""
echo "4. Open in browser: http://localhost:5000"
echo ""
echo -e "${BLUE}For production deployment:${NC}"
echo "  • Render.com: Push to GitHub, deploy with render.yaml"
echo "  • Vercel: Push to GitHub, deploy with vercel.json"
echo "  • Local: npm run build:css && gunicorn wsgi:app"
echo ""
