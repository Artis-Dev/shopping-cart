import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import ProductPage from '../pages/ProductPage';
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
          exact: true,
        },
        {
          path: 'shop',
          element: <Shop />,
          exact: true,
        },
        {
          path: 'shop/:category',
          element: <Shop />,
          exact: true,
        },
        {
          path: 'product/:productId',
          element: <ProductPage />,
          exact: true,
        },
        {
          path: 'cart',
          element: <Cart />,
          exact: true,
        },
        {
          path: 'contacts',
          element: <Contacts />,
          exact: true,
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
