import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFound';
import { XORDemo } from './pages/xor/XORDemo';
import { ListPage } from './pages/List';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <ListPage />,
      },
      {
        path: '/demo/xor',
        element: <XORDemo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
