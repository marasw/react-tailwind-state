import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Root from './routes/root';
// eslint-disable-next-line import/no-unresolved, import/extensions
import ErrorPage from './error-page';
import About from './routes/about';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />, // ={true}
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
