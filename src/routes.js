// src/routes.js
import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import Home from './pages/Home';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage'; 

// Define the routes configuration for the application
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

// Export the router for the main application
export const router = createBrowserRouter(routes);

// Export the memory router configuration for tests
export const memoryRouterConfig = (initialEntries) => 
  createMemoryRouter(routes, { initialEntries });

// Default export of the routes configuration
export default routes;
