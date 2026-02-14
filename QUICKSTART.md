# Quick Start Guide - Nevil Wandera Portfolio

Get your portfolio website live in 5 minutes! ⚡

## 🎯 Overview

You have a complete, production-ready portfolio website built with:
- **HTML5** - Semantic, accessible markup
- **CSS3** - Modern styling with animations
- **JavaScript** - Interactive features and smooth scrolling
- **Bootstrap 5** - Responsive framework
- **Google Fonts** - Professional typography

## 📦 What's Included

```
portfolio-website/
├── index.html              # Main website file
├── styles.css              # All styling and responsive design
├── script.js               # Interactivity and animations
├── vercel.json             # Deployment configuration
├── README.md               # Full documentation
├── DEPLOYMENT.md           # Detailed deployment guide
├── .gitignore              # Git ignore file
└── assets/                 # Media files folder
    ├── README.md           # Instructions for assets
    └── images/             # Images folder
```

## ⚡ 3 Ways to Deploy (Choose One)

### Option 1: Drag & Drop (Fastest - 2 minutes)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag the entire folder onto Vercel
3. Done! Your site is live 🎉

**URL**: `https://your-project-name.vercel.app`

---

### Option 2: GitHub + Vercel (Best - 5 minutes)

**Why?** Automatic updates when you make changes.

1. **Create GitHub repo** and push code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Click Deploy
   - Done! 🎉

**Future Updates**: Just push to GitHub and Vercel auto-deploys!

---

### Option 3: Vercel CLI (For Developers)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd portfolio-website
vercel

# For production
vercel --prod
```

---

## ✅ Before You Deploy - Checklist

### 1. Update Personal Information (5 minutes)

Open `index.html` and find/replace:

- ❌ `nevil.wandera@example.com` → ✅ Your real email
- ❌ `+254 700 000 000` → ✅ Your real phone number
- ❌ Social media placeholder URLs → ✅ Your actual profiles

### 2. Add Your CV (1 minute)

Place your resume PDF at: `assets/Nevil_Wandera_CV.pdf`

**Don't have it ready?** The download button shows a message until you add it.

### 3. Add Profile Photo (Optional - 2 minutes)

1. Add your photo to `assets/images/profile.jpg`
2. In `index.html`, find the About section
3. Replace the placeholder icon with:
   ```html
   <img src="assets/images/profile.jpg" alt="Nevil Wandera">
   ```

### 4. Customize Projects (10 minutes)

Update the project cards with:
- Real project names
- Actual descriptions
- Live demo links
- GitHub repository links

---

## 🎨 Customization Tips

### Change Colors

In `styles.css`, edit these variables at the top:

```css
:root {
    --primary-color: #1a1a2e;      /* Dark navy */
    --highlight-color: #e94560;     /* Red accent */
    --accent-color: #0f3460;        /* Medium blue */
}
```

### Change Fonts

The site uses:
- **Crimson Pro** (serif, for headings)
- **DM Sans** (sans-serif, for body text)

To change fonts:
1. Pick fonts from [Google Fonts](https://fonts.google.com)
2. Replace the `<link>` tag in `index.html`
3. Update `--font-display` and `--font-body` in `styles.css`

---

## 📧 Contact Form Setup

The form currently logs to console. To make it functional:

### Easy Way: Use Formspree (Free)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. In `index.html`, update form:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Advanced: Vercel Serverless Function

See `DEPLOYMENT.md` for detailed instructions.

---

## 🚀 After Deployment

### Test Everything

- ✅ Navigation links work
- ✅ Smooth scrolling works
- ✅ Contact form (if configured)
- ✅ CV download works
- ✅ Mobile responsive
- ✅ All sections visible

### SEO & Analytics

1. **Submit to Google**: [search.google.com/search-console](https://search.google.com/search-console)
2. **Add Google Analytics** (optional): Get tracking ID and add to `index.html`
3. **Test social sharing**: [Facebook Debugger](https://developers.facebook.com/tools/debug/)

### Share Your Portfolio!

Your site is ready to share with:
- 💼 LinkedIn profile
- 📧 Email signature
- 📱 Social media bio
- 📄 Job applications
- 🤝 Networking events

---

## 🆘 Common Issues & Fixes

### "CV Download Not Working"

**Problem**: File not found
**Solution**: Add your CV to `assets/Nevil_Wandera_CV.pdf`

### "Site Looks Different on Mobile"

**Problem**: Browser compatibility
**Solution**: Test on multiple devices using [BrowserStack](https://www.browserstack.com)

### "Form Not Sending Emails"

**Problem**: No backend configured
**Solution**: Set up Formspree (see above)

### "My Changes Aren't Showing"

**Problem**: Browser cache
**Solution**: Hard refresh (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)

---

## 📱 Mobile Testing

Test on real devices or use browser dev tools:

1. **Chrome DevTools**: F12 → Toggle Device Toolbar
2. **Responsive Design Mode**: View at different screen sizes
3. **Real Devices**: Test on actual phones/tablets

---

## 🎯 Next Steps

1. ✅ Deploy your site
2. ✅ Update personal information
3. ✅ Add CV and photos
4. ✅ Test on multiple devices
5. ✅ Share with the world!

---

## 📚 Additional Resources

- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Bootstrap Docs**: [getbootstrap.com](https://getbootstrap.com)

---

## 💡 Pro Tips

### Stand Out to Recruiters

1. **Keep it updated**: Add new projects regularly
2. **Show impact**: Use numbers (e.g., "Reduced bugs by 40%")
3. **Write clearly**: Avoid jargon in project descriptions
4. **Be specific**: Detail your actual contributions
5. **Add testimonials**: Ask for LinkedIn recommendations

### Improve Performance

1. Compress images (use [TinyPNG](https://tinypng.com))
2. Test speed ([PageSpeed Insights](https://pagespeed.web.dev))
3. Minimize CSS/JS (Vercel does this automatically)
4. Use WebP format for images

### Track Your Success

Add Google Analytics to see:
- How many people visit
- Which sections they read
- Where they're from
- How they found you

---

## ✨ Your Portfolio is Ready!

You now have a:
- ✅ Professional, modern design
- ✅ Fully responsive website
- ✅ SEO-optimized for search engines
- ✅ Fast, accessible, and secure
- ✅ Ready to impress recruiters

**Deploy it now and start getting noticed!** 🚀

---

**Questions?** Check `README.md` and `DEPLOYMENT.md` for detailed answers.

**Need help?** Email: nevil.wandera@example.com

**Good luck with your job search!** 🎉
