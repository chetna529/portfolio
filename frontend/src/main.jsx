import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Suppress third-party SVG validation errors that don't affect functionality
window.addEventListener('error', (event) => {
  if (event.message && event.message.includes('viewBox')) {
    event.preventDefault();
  }
}, true);

// Suppress unhandled promise rejections from third-party scripts
window.addEventListener('unhandledrejection', (event) => {
  if (event.reason && typeof event.reason === 'string' && 
      event.reason.includes('message channel closed')) {
    event.preventDefault();
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
