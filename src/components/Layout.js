import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header/Header';

function Layout() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
