# Nevil Wandera - Professional Portfolio Website

A modern, responsive portfolio website for Nevil Wandera, a Kenyan Software Developer & IT Support Specialist.

## 🌟 Features

- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Modern Design**: Clean, professional aesthetic with refined typography
- **SEO Optimized**: Complete meta tags for search engines and social sharing
- **Smooth Animations**: Scroll-triggered reveal animations and smooth transitions
- **Interactive Elements**: Dynamic contact form, animated statistics, hover effects
- **Accessible**: WCAG compliant with semantic HTML and ARIA labels
- **Performance Optimized**: Fast loading with lazy loading and optimized assets
- **Cross-Browser Compatible**: Works on all modern browsers

## 📁 Folder Structure

```
portfolio-website/
├── index.html              # Main HTML file with all sections
├── styles.css              # Complete CSS styling and responsive design
├── script.js               # JavaScript for interactivity and animations
├── assets/                 # Assets folder (create this)
│   ├── Nevil_Wandera_CV.pdf    # CV/Resume file
│   └── images/                  # Images folder
│       └── profile.jpg          # Profile photo (optional)
├── README.md               # This file
└── vercel.json             # Vercel configuration (optional)
```

## 🚀 Quick Start

### Local Development

1. **Clone or download** the project files
2. **Create the assets folder**:
   ```bash
   mkdir -p assets/images
   ```
3. **Add your CV** to `assets/Nevil_Wandera_CV.pdf`
4. **Open** `index.html` in your browser

No build process required - it's pure HTML, CSS, and JavaScript!

## 📝 Customization Guide

### 1. Update Personal Information

**In `index.html`:**

- **Email**: Search for `nevil.wandera@example.com` and replace with your email
- **Phone**: Search for `+254 700 000 000` and replace with your phone number
- **Social Links**: Update LinkedIn, GitHub, Twitter URLs in the contact section
- **Profile Photo**: Replace the placeholder icon with an actual image:
  ```html
  <!-- Replace this: -->
  <div class="profile-placeholder">
      <i class="bi bi-person-circle"></i>
  </div>
  
  <!-- With this: -->
  <img src="assets/images/profile.jpg" alt="Nevil Wandera" class="img-fluid">
  ```

### 2. Update Projects

Edit the project cards in the Projects section to add your actual project details:

- **Project images**: Replace placeholder icons with actual screenshots
- **Project links**: Update href attributes with live demo or GitHub URLs
- **Technologies**: Modify the tech stack based on your projects
- **Descriptions**: Customize project descriptions and highlights

### 3. Update Experience

Modify the timeline items in the Experience section with your actual work history.

### 4. Customize Colors

In `styles.css`, update the CSS variables at the top:

```css
:root {
    --primary-color: #1a1a2e;      /* Main dark color */
    --highlight-color: #e94560;     /* Accent/highlight color */
    --accent-color: #0f3460;        /* Secondary accent */
    /* ... modify other colors as needed */
}
```

### 5. Add Real CV File

Place your actual CV at `assets/Nevil_Wandera_CV.pdf` or update the download link in the About section.

## 🌐 Deployment to Vercel

### Method 1: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Navigate to project folder**:
   ```bash
   cd portfolio-website
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts** and your site will be live!

### Method 2: Deploy via Vercel Dashboard (Recommended)

1. **Create a GitHub repository** and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to [Vercel](https://vercel.com)**

3. **Import your GitHub repository**:
   - Click "New Project"
   - Select your repository
   - Click "Deploy"

4. **That's it!** Your site will be live at `your-project-name.vercel.app`

### Method 3: Deploy via Drag & Drop

1. **Go to [Vercel](https://vercel.com)**
2. **Drag and drop** your project folder
3. **Your site is live!**

## 🔧 Optional: Vercel Configuration

Create a `vercel.json` file for custom configuration:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## 📧 Contact Form Setup

The template is pre-wired to submit the contact form via an AJAX POST. To enable form submissions you should provide a real endpoint — the easiest option is Formspree.

### Option 1: Use Formspree (Easiest)

1. **Sign up at [Formspree](https://formspree.io)**
2. **Create a form** and obtain your form endpoint (looks like `https://formspree.io/f/abcd1234`)
3. **Open** `index.html` and replace the placeholder on the form element `data-formspree="https://formspree.io/f/your_form_id"` with your Formspree endpoint. The form uses JavaScript to POST JSON to that URL.

Example in `index.html`:
```html
<form id="contactForm" class="contact-form" data-formspree="https://formspree.io/f/abcd1234">
```

4. No further changes to `script.js` are required — the template will send the JSON payload to Formspree and show success/error messages.

### Option 2: Use Vercel Serverless Functions

1. **Create** `api/contact.js` if you prefer a server-side handler:
   ```javascript
   export default async function handler(req, res) {
     if (req.method !== 'POST') {
       return res.status(405).json({ message: 'Method not allowed' });
     }
       
     const { name, email, subject, message } = req.body;
       
     // Add your email sending logic here (e.g., using SendGrid, Mailgun)
       
     res.status(200).json({ message: 'Message sent successfully' });
   }
   ```

2. Update the form in `index.html` to remove the `data-formspree` attribute and instead call `/api/contact` from the client or modify `script.js` to POST to `/api/contact`.

## 🎨 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid, animations
- **JavaScript (ES6+)**: Vanilla JS for interactivity
- **Bootstrap 5.3.2**: Responsive grid and components
- **Bootstrap Icons**: Icon library
- **Google Fonts**: Crimson Pro (serif) + DM Sans (sans-serif)

## ✨ Key Features Explained

### Smooth Scrolling
Automatically scrolls to sections when clicking navigation links.

### Scroll Animations
Elements fade in as you scroll down the page using Intersection Observer API.

### Active Navigation
Navigation links highlight based on the current section in view.

### Statistics Counter
Numbers animate from 0 to their target value when scrolled into view.

### Scroll to Top Button
Appears after scrolling down 300px, smoothly scrolls back to top.

### Form Validation
Client-side validation for contact form with email format checking.

## 🔍 SEO Optimization

The website includes:

- Semantic HTML5 elements
- Meta description and keywords
- Open Graph tags for social sharing
- Twitter Card tags
- Descriptive alt texts
- Proper heading hierarchy
- Fast loading times

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### CV Download Not Working

Make sure the CV file exists at `assets/Nevil_Wandera_CV.pdf`. The template now checks for the file before redirecting; if the file is missing the site will show a friendly message instead of a broken download.

If you want to use a different filename, update the download link in `index.html`:

```html
<a href="assets/YOUR_CV_FILENAME.pdf" download class="btn btn-primary" id="downloadCV">
```

### Images Not Showing

Ensure images are placed in the `assets/images/` folder and paths are correct in HTML.

### Contact Form Not Sending

Follow the "Contact Form Setup" section above to integrate with a backend service.

## 📄 License

This portfolio template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## 🤝 Support

For questions or issues:

- **Email**: nevil.wandera@example.com
- **GitHub Issues**: Create an issue in the repository

---

**Built with ❤️ by Nevil Wandera**

*Last updated: February 2026*
