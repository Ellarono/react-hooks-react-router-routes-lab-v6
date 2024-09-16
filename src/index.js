// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { routes } from './routes';  // Import the routes configuration

// Create the router instance
const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App router={router} /> {/* Pass the router to your App component */}
    </BrowserRouter>
  </React.StrictMode>
);
