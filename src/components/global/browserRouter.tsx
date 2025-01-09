import { createBrowserRouter, Navigate } from 'react-router-dom';

import ErrorPage from '../../routes/errors/errorPage';
import { GET_HOME } from '../home/home.fragment';
import { GET_ROOT } from '../root/root.fragment';
import { GET_PROJECTS } from '../selectedProjects/selectedProjects.fragment';

import { queryLoader } from './genericQueryLoader';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    async lazy() {
      const Root = await import('../../routes/root');
      return { Component: Root.default };
    },
    errorElement: <ErrorPage />,
    loader: queryLoader(GET_ROOT),
    children: [
      {
        path: '/',
        element: <Navigate to="/home" replace />,
      },
      {
        path: '/home',
        loader: queryLoader(GET_HOME),
        async lazy() {
          const Home = await import('../../routes/home');
          return { Component: Home.default };
        },
      },
      {
        path: '/selected-projects',
        loader: queryLoader(GET_PROJECTS),
        async lazy() {
          const SelectedProjects = await import(
            '../../routes/selectedProjects'
          );

          return { Component: SelectedProjects.default };
        },
      },
    ],
  },
]);

export default router;
