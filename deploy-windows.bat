@echo off
echo.
echo ========================================
echo    Zyn Website Deployment Script
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo ✅ Node.js and npm are installed
echo.

REM Install dependencies
echo 📦 Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully
echo.

REM Build the project
echo 🔨 Building the project...
npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed
    pause
    exit /b 1
)

echo ✅ Build completed successfully
echo.

REM Check if Vercel CLI is installed
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 📥 Installing Vercel CLI...
    npm install -g vercel
    if %errorlevel% neq 0 (
        echo ❌ Failed to install Vercel CLI
        pause
        exit /b 1
    )
)

echo ✅ Vercel CLI is ready
echo.

REM Deploy to Vercel
echo 🚀 Deploying to Vercel...
echo Follow the prompts to complete deployment
echo.

vercel

if %errorlevel% equ 0 (
    echo.
    echo 🎉 Deployment completed successfully!
    echo Your Zyn website is now live on Vercel
    echo.
    echo Next steps:
    echo 1. Set up your custom domain in Vercel dashboard
    echo 2. Configure environment variables for production
    echo 3. Set up analytics tracking
    echo 4. Test all functionality on the live site
    echo.
) else (
    echo ❌ Deployment failed
)

echo.
echo Press any key to exit...
pause >nul