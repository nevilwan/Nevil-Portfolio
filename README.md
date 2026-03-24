# Nevil Wandera Portfolio

A modern, responsive portfolio website built with Vite, Tailwind CSS, and Lucide icons. Showcases software development and data science expertise with a clean SaaS-inspired design.

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 16 or higher) - [Download from nodejs.org](https://nodejs.org/)
- **Git** (optional, for cloning)

### Installation

1. **Clone or download the project**:
   ```bash
   git clone <your-repo-url>
   cd "nevil-portfolio"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Project

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to:
   ```
   http://localhost:8080
   ```

The development server will automatically reload when you make changes to the code.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` folder. You can preview the production build with:

```bash
npm run preview
```

## 🛠️ Project Structure

```
nevil-portfolio/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── config.js           # Tailwind configuration
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
└── .vscode/
    └── launch.json     # VS Code debug configuration
```

## 🐛 Troubleshooting

### "npm is not recognized"
If you get this error, Node.js isn't in your system PATH:

**Windows:**
1. Search for "Environment Variables" in Windows search
2. Click "Environment Variables"
3. Under "System variables", find "Path" and click "Edit"
4. Add: `C:\Program Files\nodejs\`
5. Restart your terminal/VS Code

**Alternative:** Use the full path to npm:
```bash
"C:\Program Files\nodejs\npm.cmd" install
"C:\Program Files\nodejs\npm.cmd" run dev
```

### Port 8080 is already in use
If port 8080 is busy, you can change it in `vite.config.js`:
```javascript
server: {
  port: 3000  // or any other available port
}
```

### Icons not showing
The project uses inline SVG icons, so they should work without external dependencies. If icons are missing, check that the SVG code is intact in `index.html`.

## 🎨 Customization

### Colors and Styling
- Main colors are defined in `styles.css`
- Tailwind classes are used throughout for responsive design
- Dark theme with blue/green accent colors

### Content Updates
- Personal info: Update the hero section in `index.html`
- Projects: Modify the projects section
- Contact details: Update email, phone, and social links
- Skills: Edit the skills grid

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style with Tailwind classes or custom CSS in `styles.css`
3. Test responsiveness on different screen sizes

## 📱 Features

- ✅ Responsive design (mobile-first)
- ✅ Dark theme with glassmorphism effects
- ✅ Smooth animations and transitions
- ✅ Contact form (frontend only)
- ✅ SEO optimized with meta tags
- ✅ Accessibility features (ARIA labels, keyboard navigation)
- ✅ Fast loading with Vite bundler

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide (inline SVG)
- **Build Tool:** Vite
- **Deployment:** Static hosting (Netlify, Vercel, GitHub Pages)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues:
- Email: villeowan@gmail.com
- Phone: +254 740 161 633
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Built with ❤️ by Nevil Wandera