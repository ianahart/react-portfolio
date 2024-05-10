import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import NotFoundRoute from './routes/NotFoundRoute';
import ResumeRoute from './routes/ResumeRoute';
import PortfolioRoute from './routes/PortfolioRoute';
import AboutRoute from './routes/AboutRoute';
import ContactRoute from './routes/ContactRoute';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundRoute />,
    children: [
      {
        index: true,
        element: <AboutRoute />,
      },
      {
        path: '/portfolio',
        element: <PortfolioRoute />,
      },
      {
        path: '/contact',
        element: <ContactRoute />,
      },
      {
        path: '/resume',
        element: <ResumeRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
