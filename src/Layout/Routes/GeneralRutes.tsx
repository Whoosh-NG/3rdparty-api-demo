// generalRoutes.js

import Home from '@/Pages/Home/Home';
import Products from '@/Pages/Products';
import { ReactElement } from 'react';

interface Route {
  path: string;
  element: ReactElement;
}

const generalRoutes: Route[] = [
  { path: '/', element: <Home /> },
  { path: '/products/:id', element: <Products /> },
];

export default generalRoutes;
