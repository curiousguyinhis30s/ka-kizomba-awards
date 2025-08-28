# KA - Kizomba Awards Deployment Instructions

## Step 1: Create GitHub Repository
I've opened GitHub new repository page for you. Please:
1. **Repository name**: `ka-kizomba-awards`
2. **Description**: KA - Kizomba Awards: Southeast Asian dance community voting platform
3. **Public** repository (leave it public)
4. **DO NOT** initialize with README (we already have files)
5. Click **Create repository**

## Step 2: Push Code to GitHub
After creating the repository, copy these commands and run them in terminal:

```bash
cd /Users/samiullah/dance-awards-mvp

# Add your GitHub repository as origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/ka-kizomba-awards.git

# Push the code
git branch -M main
git push -u origin main
```

## Step 3: Import to Vercel
I've opened Vercel's new project page. After pushing to GitHub:
1. Click **Import Git Repository**
2. Search for `ka-kizomba-awards`
3. Click **Import**
4. Leave all settings as default (Vercel will auto-detect Next.js)
5. Click **Deploy**

## Your Repository Details:
- **Project Name**: ka-kizomba-awards
- **Framework**: Next.js 14
- **Build Command**: npm run build (auto-detected)
- **Output Directory**: .next (auto-detected)

## After Deployment:
Your app will be live at: `https://ka-kizomba-awards.vercel.app`