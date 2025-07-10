#!/bin/bash

# Zyn Website Deployment Script
# This script helps deploy your Zyn website to Vercel

echo "🚀 Zyn Website Deployment Script"
echo "=================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📥 Installing Vercel CLI..."
    npm install -g vercel
fi

echo "✅ Vercel CLI is ready"

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
echo "Follow the prompts to complete deployment"
echo ""

vercel

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment completed successfully!"
    echo "Your Zyn website is now live on Vercel"
    echo ""
    echo "Next steps:"
    echo "1. Set up your custom domain in Vercel dashboard"
    echo "2. Configure environment variables for production"
    echo "3. Set up analytics tracking"
    echo "4. Test all functionality on the live site"
else
    echo "❌ Deployment failed"
    exit 1
fi