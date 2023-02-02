import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header/Header';

function Layout() {
  const { showNav } = useSelector((state) => state);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <div
        className={`my-0 mx-auto w-full grow bg-white pt-[80px] duration-300
        ${showNav && 'brightness-50'}`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
