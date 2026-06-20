@echo off
REM ═══════════════════════════════════════════════════════
REM Portfolio Setup Script for Windows
REM ═══════════════════════════════════════════════════════

setlocal enabledelayedexpansion

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║     Rithin's Cybersecurity Portfolio Setup             ║
echo ╚════════════════════════════════════════════════════════╝
echo.

REM Check Python
echo Checking Python...
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python not found. Please install Python 3.10+
    pause
    exit /b 1
)
for /f "tokens=2" %%i in ('python --version 2^>^&1') do set PYTHON_VERSION=%%i
echo ✓ Python %PYTHON_VERSION% found

REM Check Node
echo Checking Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js not found. Please install Node.js 18.x+
    pause
    exit /b 1
)
for /f "tokens=1" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✓ %NODE_VERSION% found

REM Create virtual environment
echo.
echo Setting up Python virtual environment...
if not exist "venv" (
    python -m venv venv
    echo ✓ Virtual environment created
) else (
    echo ⚠ Virtual environment already exists
)

REM Activate venv
call venv\Scripts\activate.bat

REM Install Python dependencies
echo.
echo Installing Python dependencies...
pip install -q -r requirements.txt
echo ✓ Python dependencies installed

REM Install Node dependencies
echo.
echo Installing Node.js dependencies...
call npm install
echo ✓ Node.js dependencies installed

REM Build CSS
echo.
echo Building Tailwind CSS...
call npm run build:css
echo ✓ CSS built successfully

REM Create .env if it doesn't exist
if not exist ".env" (
    echo.
    echo Creating .env file...
    copy .env.example .env >nul
    echo ✓ .env file created
) else (
    echo ⚠ .env already exists
)

REM Final instructions
echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║     ✓ Setup Complete!                                 ║
echo ╚════════════════════════════════════════════════════════╝
echo.
echo Next steps:
echo 1. Add your profile photo to: static\img\rithin.jpg
echo 2. Update your information in: app.py
echo 3. Start development server:
echo.
echo    npm run dev
echo.
echo 4. Open in browser: http://localhost:5000
echo.
echo For production deployment:
echo   * Render.com: Push to GitHub, deploy with render.yaml
echo   * Vercel: Push to GitHub, deploy with vercel.json
echo   * Local: npm run build:css ^&^& gunicorn wsgi:app
echo.
pause
