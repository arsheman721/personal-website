# Ahmed Arshe - Portfolio Website

A modern, professionally designed portfolio website for Ahmed Arshe, Cyber Security Consultant, featuring an animated Voronoi shader background and glass morphism effects.

## Features

- **Animated Background**: Interactive Voronoi diagram shader using @paper-design/shaders-react
- **Modern Design**: Glass morphism effects with backdrop blur
- **Responsive**: Fully responsive design that works on mobile, tablet, and desktop
- **Professional Content**: Updated with cyber security focus and professional descriptions
- **Performance Optimized**: Lazy loading, smooth animations, and device-specific optimizations
- **Accessibility**: WCAG compliant with proper contrast ratios and semantic HTML

## Tech Stack

- **HTML5**: Semantic markup for all pages
- **SCSS/Sass**: Modular styling with modern CSS features
- **React 18**: For the animated background component only (hybrid approach)
- **Vite**: Modern build tool for bundling React components
- **@paper-design/shaders-react**: Voronoi shader animation library
- **Vanilla JavaScript**: Menu interactions and scroll animations

## Project Structure

```
personal-website/
├── src/
│   └── background/
│       ├── VoronoiBackground.jsx  # React component for animated background
│       └── index.jsx               # Entry point for Vite
├── dist/
│   ├── index.html                  # Home page
│   ├── about.html                  # About page
│   ├── work.html                   # Work/Projects page
│   ├── contact.html                # Contact page
│   ├── css/
│   │   └── main.css                # Compiled CSS from SCSS
│   └── js/
│       ├── main.js                 # Main JavaScript for interactions
│       └── voronoi-background.js   # Bundled React background component
├── scss/
│   ├── main.scss                   # Main stylesheet
│   ├── _config.scss                # Colors and configuration
│   ├── _menu.scss                  # Menu/navigation styles
│   └── _mobile.scss                # Mobile responsive styles
├── vite.config.js                  # Vite configuration
└── package.json                    # Dependencies and scripts
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

## Development

### Start Development Server

Run SCSS watcher and Vite dev server in parallel:
```bash
npm run dev
```

This will:
- Watch SCSS files for changes and compile to CSS
- Start Vite dev server for the React background component

### Build for Production

Compile SCSS and build React components:
```bash
npm run build
```

Individual build commands:
```bash
npm run sass:build  # Compile SCSS to compressed CSS
npm run build:bg    # Build React background component
```

## Design System

### Color Palette

- **Primary**: #1a1a1a (Deep charcoal)
- **Secondary**: #ff8247 (Warm orange)
- **Tertiary**: #465e13 (Olive green)
- **Accent**: #f5f5f5 (Light cream)

### Typography

- System fonts: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial
- Font weights: 400 (body), 600 (headings), 700 (large headings)
- Line height: 1.6

### Key Features

- **Glass Morphism**: Cards and overlays use backdrop-filter blur effects
- **Smooth Animations**: CSS transitions with ease-out timing
- **Hover Effects**: Interactive elements with transform and shadow effects
- **Responsive Grid**: CSS Grid for layouts with mobile-first approach

## Performance Optimizations

- Lazy loading for images
- Reduced shader quality on low-end devices
- Smooth scroll behavior
- Intersection Observer for scroll animations
- Minified CSS and JavaScript in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- WCAG 2.1 AA compliant contrast ratios
- Responsive text sizing

## Deployment

### To Deploy

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder to your hosting service:
   - GitHub Pages
   - Netlify
   - Vercel
   - Any static hosting service

### Local Testing

Start a local server:
```bash
cd dist
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Credits

- **Design & Development**: Ahmed Arshe
- **Voronoi Shader**: [@paper-design/shaders-react](https://github.com/paper-design/shaders)
- **Icons**: Font Awesome

## License

MIT License - Feel free to use this as a template for your own portfolio!

## Contact

- **Email**: contact@ahmedarshe.com
- **LinkedIn**: [ahmed-arshe](https://www.linkedin.com/in/ahmed-arshe-70141416b)
- **GitHub**: [arsheman721](https://github.com/arsheman721)
