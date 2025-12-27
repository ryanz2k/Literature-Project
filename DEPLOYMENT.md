# Deployment Guide - GitHub Pages

This guide will walk you through deploying your Interactive Literature Timeline to GitHub Pages.

## 📋 Prerequisites

- A GitHub account (free)
- Git installed on your computer ([Download Git](https://git-scm.com/downloads))
- All project files ready

## 🚀 Step-by-Step Deployment

### Step 1: Create a New GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `world-literature-timeline` (or your preferred name)
   - **Description**: "Interactive multimedia timeline of world literature"
   - **Visibility**: Choose **Public** (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### Step 2: Initialize Git in Your Project Folder

Open your terminal/command prompt in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Interactive Literature Timeline"
```

### Step 3: Connect to GitHub and Push

```bash
# Add your GitHub repository as remote (replace with your username and repo name)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note**: You'll be prompted for your GitHub username and password (or personal access token).

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for GitHub to build your site

### Step 5: Access Your Live Site

Your site will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

**Example**: If your username is `johndoe` and repo is `world-literature-timeline`:
```
https://johndoe.github.io/world-literature-timeline/
```

## 🔄 Updating Your Site

Whenever you make changes:

```bash
# Add changed files
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

GitHub Pages will automatically update your site within 1-2 minutes.

## 🛠️ Troubleshooting

### Site Not Loading?

1. **Check Settings**: Make sure GitHub Pages is enabled in Settings → Pages
2. **Check Branch**: Ensure you selected the `main` branch
3. **Wait**: It can take 1-5 minutes for the site to appear
4. **Check URL**: Make sure you're using the correct URL format
5. **Clear Cache**: Try opening in an incognito/private window

### 404 Error?

- Make sure `index.html` is in the root directory
- Check that the file is named exactly `index.html` (lowercase)
- Verify all files were pushed to GitHub

### Changes Not Appearing?

- Wait 1-2 minutes for GitHub to rebuild
- Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Check if your changes were actually committed and pushed

## 📝 Custom Domain (Optional)

If you want to use a custom domain:

1. In GitHub Pages settings, enter your custom domain
2. Add a `CNAME` file to your repository with your domain name
3. Configure DNS settings with your domain provider

## ✅ Quick Checklist

- [ ] Created GitHub repository
- [ ] Initialized git in project folder
- [ ] Committed all files
- [ ] Pushed to GitHub
- [ ] Enabled GitHub Pages in Settings
- [ ] Verified site is live
- [ ] Tested all interactive features

## 🎉 You're Done!

Your interactive timeline is now live on the web! Share the link with your professor, classmates, or anyone interested in world literature.

---

**Need Help?** Check GitHub's official documentation: [GitHub Pages Docs](https://docs.github.com/en/pages)

