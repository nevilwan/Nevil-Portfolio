# Vercel Deployment Guide

Complete guide to deploying Nevil Wandera's portfolio website on Vercel.

## Prerequisites

- A Vercel account (free) - Sign up at [vercel.com](https://vercel.com)
- Your portfolio files ready
- Optional: Git and GitHub account for version control

---

## Method 1: Deploy via GitHub (Recommended)

This method enables automatic deployments when you push code changes.

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `portfolio` or `nevil-wandera-portfolio`
3. Keep it public or private (your choice)
4. Don't initialize with README (we already have files)

### Step 2: Push Your Code

Open terminal in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio website commit"

# Add remote repository (replace with your GitHub URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Import to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Click "Import Git Repository"
4. Select your portfolio repository
5. Configure project:
   - **Project Name**: `nevil-wandera-portfolio` (or your preferred name)
   - **Framework Preset**: Select "Other"
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: Leave empty (static site)
   - **Output Directory**: Leave empty
6. Click "Deploy"
7. Wait 1-2 minutes for deployment to complete
8. Your site is now live! 🎉

### Step 4: Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (up to 48 hours, usually much faster)

---

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

Or using Yarn:

```bash
yarn global add vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate.

### Step 3: Deploy

Navigate to your project folder:

```bash
cd path/to/portfolio-website
```

Deploy:

```bash
vercel
```

Answer the prompts:

- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N** (for first deployment)
- Project name? **nevil-wandera-portfolio**
- In which directory? **./** (press Enter)
- Override settings? **N**

Your site will deploy and you'll get a URL!

### Step 4: Production Deployment

For production deployment:

```bash
vercel --prod
```

---

## Method 3: Drag & Drop Deployment

Quickest method, but no automatic updates.

### Steps:

1. Go to [Vercel](https://vercel.com/new)
2. Scroll down to "Or, deploy a new project from a template"
3. Click "Browse" or drag your project folder
4. Drop the entire folder (including all files and subfolders)
5. Wait for upload and automatic deployment
6. Your site is live!

**Note**: Future updates require re-uploading the entire folder.

---

## Environment Setup

### For Contact Form Integration

If you're using Vercel Serverless Functions:

1. Create `.env` file:
   ```env
   SENDGRID_API_KEY=your_sendgrid_api_key
   CONTACT_EMAIL=nevil.wandera@example.com
   ```

2. Add to Vercel:
   - Go to Project Settings → Environment Variables
   - Add each variable
   - Redeploy the project

---

## Custom Domain Configuration

### Using Your Own Domain

1. **Purchase domain** from registrar (Namecheap, GoDaddy, etc.)

2. **In Vercel Dashboard:**
   - Project → Settings → Domains
   - Click "Add"
   - Enter your domain (e.g., `nevilwandera.com`)
   - Click "Add"

3. **Configure DNS:**

   **Option A: Vercel Nameservers (Recommended)**
   
   Update your domain's nameservers to:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

   **Option B: CNAME Record**
   
   Add CNAME record at your registrar:
   ```
   Type: CNAME
   Name: www (or @)
   Value: cname.vercel-dns.com
   ```

4. **Wait for propagation** (5 minutes to 48 hours)

5. **SSL Certificate**: Vercel automatically provisions SSL (HTTPS)

---

## Deployment Checklist

Before deploying, ensure:

- [ ] All personal information is updated (email, phone, social links)
- [ ] CV file is added to `assets/Nevil_Wandera_CV.pdf`
- [ ] Profile photo is added (optional)
- [ ] Project descriptions are complete and accurate
- [ ] All links are working (social media, email)
- [ ] Meta tags are updated with correct information
- [ ] Contact form is configured (if using backend)
- [ ] All placeholder content is replaced
- [ ] Website tested on different devices
- [ ] Browser compatibility checked

---

## Post-Deployment Tasks

### 1. Verify Deployment

- [ ] Visit your deployed URL
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Test CV download
- [ ] Check mobile responsiveness
- [ ] Verify all images load
- [ ] Test on different browsers

### 2. Configure Analytics (Optional)

Add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### 3. Submit to Search Engines

- Google Search Console: [search.google.com/search-console](https://search.google.com/search-console)
- Bing Webmaster Tools: [bing.com/webmasters](https://www.bing.com/webmasters)

### 4. Social Media Sharing

Test how your site appears when shared:

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

## Updating Your Site

### Using Git + Vercel (Automatic)

```bash
# Make your changes
# Then commit and push
git add .
git commit -m "Update portfolio content"
git push origin main
```

Vercel automatically detects the push and redeploys! 🎉

### Using Vercel CLI

```bash
# Make your changes
# Then redeploy
vercel --prod
```

### Using Drag & Drop

Re-upload the entire updated folder to Vercel.

---

## Troubleshooting

### Deployment Fails

**Error**: "No Framework Detected"
- **Solution**: Make sure `index.html` is in the root directory

**Error**: "Build Failed"
- **Solution**: This is a static site, ensure no build command is set

### Site Not Loading

- Check Vercel deployment logs
- Verify all file paths are correct (case-sensitive)
- Ensure no JavaScript errors in browser console

### Contact Form Not Working

- Verify form action URL is correct
- Check Vercel Functions logs if using serverless functions
- Test with a simple alert to ensure JS is working

### Custom Domain Issues

- **DNS not propagating**: Wait up to 48 hours, use [whatsmydns.net](https://www.whatsmydns.net) to check
- **SSL not working**: Vercel auto-provisions SSL, but it may take a few minutes
- **www not working**: Add both `example.com` and `www.example.com` in Vercel

---

## Performance Optimization

After deployment, test your site:

1. **PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev)
2. **GTmetrix**: [gtmetrix.com](https://gtmetrix.com)
3. **WebPageTest**: [webpagetest.org](https://www.webpagetest.org)

Tips for better performance:

- Compress images (use TinyPNG, ImageOptim)
- Minify CSS and JS (Vercel does this automatically)
- Enable caching (configured in `vercel.json`)
- Use WebP images with fallbacks

---

## Support

Need help?

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **This Project**: Create an issue in the GitHub repository

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Git Tutorial](https://git-scm.com/docs/gittutorial)
- [GitHub Guides](https://guides.github.com)
- [HTML Best Practices](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [CSS Best Practices](https://developer.mozilla.org/en-US/docs/Learn/CSS)

---

**Happy Deploying! 🚀**

Your portfolio will be live and accessible worldwide in minutes!
