import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
// import Header from './components/Header/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Contacts from './pages/Contacts';

function App() {
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
            path: 'cart',
            element: <Cart />,
          },
          {
            path: 'contacts',
            element: <Contacts />,
          },
        ],
      },
    ],
    {
      basename: '/shopping-cart',
    }
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
