import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header/Header';
import useScrollToTop from '../utils/useScrollToTop';

function Layout() {
  const { showNav } = useSelector((state) => state.ui);
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <div
        className={`mx-auto my-0 w-full grow bg-white pt-[80px] duration-300
        ${showNav && 'brightness-50'}`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
