import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Contacts from '../pages/Contacts';
import PageNotFound from '../pages/PageNotFound';

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'shop',
          element: <Shop />,
        },
        {
          path: 'shop/:category',
          element: <Shop />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: 'contacts',
          element: <Contacts />,
        },
        {
          path: '*',
          element: <PageNotFound />,
        },
      ],
    },
  ],
  {
    basename: '/shopping-cart',
  }
);

export default router;
