import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { router } from './routes';  // Import your router configuration

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterProvider router={router} /> {/* Use RouterProvider here */}
    </BrowserRouter>
  </React.StrictMode>
);
