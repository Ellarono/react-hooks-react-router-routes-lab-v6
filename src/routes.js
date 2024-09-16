// src/routes.js
import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import Home from './pages/Home';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage'; 

// Define the routes configuration
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
  {
    path: "*",  // Catch-all route for undefined paths
    element: <ErrorPage />,
  },
];

// Export the routes array
export const routesConfig = {
  routes,
};

// For testing purposes, you might want to export a memory router configuration
export const memoryRouterConfig = (initialEntries) => 
  createMemoryRouter(routes, {
    initialEntries,
  });

export default routes;
