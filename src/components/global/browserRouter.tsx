import { createBrowserRouter, Navigate } from 'react-router-dom';

import ErrorPage from '../../routes/errors/errorPage';
import { rootLoader } from '../root/root.loader';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    async lazy() {
      const Root = await import('../../routes/root');
      return { Component: Root.default };
    },
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" replace />,
      },
      {
        path: '/home',
        element: <h1>Home</h1>,
      },
    ],
  },
]);

export default router;
