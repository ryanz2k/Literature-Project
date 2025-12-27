# Multimedia Timeline of World Literature

An interactive, single-page website showcasing 4,000 years of world literature history. This timeline features 15 major literary works across 4 distinct periods, from ancient epics to contemporary global literature.

![Timeline Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue)

## 🌟 Features

- **Interactive Timeline**: Navigate through 15 literary works with smooth scrolling
- **Period Filtering**: Filter entries by literary period (Ancient, Medieval, Enlightenment, Modern)
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging fade-in and slide animations
- **Modern UI**: Beautiful gradient backgrounds and glassmorphism effects
- **Keyboard Navigation**: Use arrow keys to navigate through the timeline

## 📚 Timeline Entries

### Period 1: Ancient Literature (3000 BCE - 500 CE)
1. The Epic of Gilgamesh (c. 2100 BCE)
2. The Iliad and The Odyssey (c. 8th century BCE)
3. The Mahabharata (c. 400 BCE - 400 CE)
4. The Aeneid (29-19 BCE)

### Period 2: Medieval & Renaissance Literature (500 - 1600 CE)
5. Beowulf (c. 700-1000 CE)
6. The Divine Comedy (1308-1321 CE)
7. The Canterbury Tales (1387-1400 CE)
8. Don Quixote (1605-1615 CE)

### Period 3: Enlightenment, Romanticism & Realism (1600 - 1900 CE)
9. Candide (1759 CE)
10. Frankenstein (1818 CE)
11. A Tale of Two Cities (1859 CE)
12. Realism Literary Movement (1850-1900 CE)

### Period 4: Modern & Contemporary Literature (1900 - Present)
13. Ulysses (1922 CE)
14. One Hundred Years of Solitude (1967 CE)
15. Contemporary Global Literature (1980 - Present)

## 🚀 Quick Start

### Option 1: View Live (GitHub Pages)
Simply visit: `https://[your-username].github.io/[repo-name]/`

### Option 2: Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/[your-username]/[repo-name].git
   cd [repo-name]
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. **View at:** `http://localhost:8000`

## 📦 Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Interactive Literature Timeline"
   git branch -M main
   git remote add origin https://github.com/[your-username]/[repo-name].git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **main** branch
   - Click **Save**
   - Your site will be live at: `https://[your-username].github.io/[repo-name]/`

### Method 2: Using GitHub CLI

```bash
gh repo create [repo-name] --public
git push -u origin main
gh repo view --web
# Then enable Pages in Settings
```

## 🎨 Customization

### Changing Colors

Edit `styles.css` and modify the CSS variables:

```css
:root {
    --color-ancient: #D4A574;
    --color-medieval: #722F37;
    --color-enlightenment: #1A1F2E;
    --color-modern: #E74C3C;
    --color-accent: #3498DB;
}
```

### Adding More Entries

1. Open `index.html`
2. Find the timeline section
3. Copy an existing entry structure
4. Modify the content, date, and data attributes
5. The entry will automatically appear in the timeline

### Modifying Content

All content is in `index.html`. Simply edit the text within the `.entry-content` divs.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (Vanilla)**: No frameworks required - pure JavaScript for interactivity
- **Google Fonts**: Playfair Display & Lato for typography

## 📄 Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive functionality
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## 🎯 Features Breakdown

### Interactive Elements
- **Period Filtering**: Click filter buttons to show specific periods
- **Smooth Scrolling**: Navigate between sections smoothly
- **Scroll Animations**: Entries fade in as you scroll
- **Scroll to Top**: Button appears when scrolling down
- **Keyboard Navigation**: Use arrow keys to navigate

### Visual Design
- **Gradient Backgrounds**: Beautiful color transitions
- **Glassmorphism**: Modern frosted glass effects
- **Timeline Line**: Visual connection between entries
- **Color-Coded Periods**: Each period has its own color theme
- **Responsive Layout**: Adapts to all screen sizes

## 📝 License

This project is created for educational purposes as part of a Literature Research Final Project.

## 👤 Author

Created for the World Literature Timeline Final Project

## 🙏 Acknowledgments

- All literary works and authors referenced
- Google Fonts for typography
- Modern web standards for inspiration

## 🔄 Updates & Maintenance

To update the timeline:
1. Edit `index.html` for content changes
2. Edit `styles.css` for design changes
3. Edit `script.js` for functionality changes
4. Commit and push to GitHub
5. Changes will automatically deploy to GitHub Pages

---

**Enjoy exploring 4,000 years of world literature! 📚✨**

