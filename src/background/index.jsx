import React from 'react';
import { createRoot } from 'react-dom/client';
import GrainBackground from './GrainBackground';

const initBackground = () => {
  const rootElement = document.getElementById('grain-root');
  
  if (rootElement) {
    try {
      const root = createRoot(rootElement);
      root.render(<GrainBackground />);
      console.log('Grain gradient background initialized');
    } catch (error) {
      console.error('Failed to initialize grain gradient background:', error);
    }
  } else {
    console.error('Grain gradient root element not found');
  }
};

// Initialize after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBackground);
} else {
  initBackground();
}
