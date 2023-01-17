import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Contacts from './pages/Contacts';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      index: true,
      element: <Home />,
    },
    {
      path: 'Shop',
      element: <Shop />,
    },
    {
      path: 'Cart',
      element: <Cart />,
    },
    {
      path: 'Contacts',
      element: <Contacts />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}>
        <Header />
      </RouterProvider>
    </div>
  );
}

export default App;
