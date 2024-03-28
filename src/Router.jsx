import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import Lugares from './components/Lugares.jsx';
import Tour from './components/Tour.jsx';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'lugares', element: <Lugares /> },
        { path: 'tour', element: <Tour /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
