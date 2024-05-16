// generalRoutes.js

import Home from '@/Pages/Home/Home';
import Products from '@/Pages/Products';
import Success from '@/Pages/Success/Success';
import { ReactElement } from 'react';

interface Route {
  path: string;
  element: ReactElement;
}

const generalRoutes: Route[] = [
  { path: '/', element: <Home /> },
  { path: '/products/:id', element: <Products /> },
  { path: '/success', element: <Success /> },
];

export default generalRoutes;
