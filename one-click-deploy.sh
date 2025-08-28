#!/bin/bash

# One-Click Deploy Script for Future Projects
echo "🚀 One-Click Deploy Script"
echo "========================="

# Check if project name is provided
if [ -z "$1" ]; then
    echo "Usage: ./one-click-deploy.sh <project-name>"
    exit 1
fi

PROJECT_NAME=$1

echo "📦 Creating GitHub repository..."
gh repo create $PROJECT_NAME --public --source=. --remote=origin --push

echo "🔄 Deploying to Vercel..."
vercel --prod --yes

echo "✅ Deployment complete!"
echo "GitHub: https://github.com/$(gh api user --jq .login)/$PROJECT_NAME"
echo "Check Vercel dashboard for live URL"