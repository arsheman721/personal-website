import React from 'react';
import { createRoot } from 'react-dom/client';
import GrainGradientBackground from './VoronoiBackground';

// Lazy initialization of background
const initBackground = () => {
  const rootElement = document.getElementById('grain-root');
  
  if (rootElement) {
    try {
      const root = createRoot(rootElement);
      root.render(<GrainGradientBackground />);
      console.log('Grain gradient background initialized');
    } catch (error) {
      console.error('Failed to initialize grain gradient background:', error);
      // Fallback: add static gradient class
      document.body.classList.add('static-bg-fallback');
    }
  } else {
    console.error('Grain gradient root element not found');
  }
};

// Only initialize after DOM is fully ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(initBackground);
  });
} else {
  requestAnimationFrame(initBackground);
}
