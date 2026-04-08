# Nevil Wandera Portfolio

## Quick Start

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

## Troubleshooting

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
## License

This project is open source and available under the [MIT License](LICENSE).
