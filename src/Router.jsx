import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import Places from './components/Places.jsx';
import Place from './components/Place.jsx';
import Tour from './components/Tour.jsx';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'lugares', element: <Places /> },
        { path: 'tour', element: <Tour /> },
        { path: 'lugares/:id', element: <Place /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
