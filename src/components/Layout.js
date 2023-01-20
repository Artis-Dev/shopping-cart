import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import Footer from './Footer';
import Header from './Header/Header';
import Navigation from './Header/Navigation';

function Layout() {
  const [showNav, setShowNav] = useState(false);

  const isMobile = useMediaQuery('(max-width: 640px)');

  const handleShowNav = () => {
    if (isMobile) {
      setShowNav(!showNav);
    }
  };

  useEffect(() => {
    if (!isMobile) {
      setShowNav(false);
    }
  }, [isMobile]);

  return (
    <div className="flex h-screen flex-col">
      <Header handleShowNav={handleShowNav} showNav={showNav} />
      {showNav && <Navigation showNav={showNav} />}
      <div
        className={`my-0 mx-auto w-full max-w-screen-xl grow duration-300 ${
          showNav && 'bg-gray-500 opacity-25'
        }`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
