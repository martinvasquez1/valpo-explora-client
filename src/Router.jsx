import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}
