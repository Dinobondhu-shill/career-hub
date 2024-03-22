import React from 'react';
import { createRoot } from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './components/Root';
import Home from './components/Home';
import Applied from './components/Applied';
import Statistics from './components/Statistics';
import Blogs from './components/Blogs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/applied',
        element:<Applied></Applied>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);