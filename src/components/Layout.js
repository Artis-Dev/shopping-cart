import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';
import Footer from './Footer';
import Header from './Header/Header';

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
    <div className="flex min-h-screen flex-col bg-neutral-50">
      <Header handleShowNav={handleShowNav} showNav={showNav} />
      <div
        className={`my-0 mx-auto w-full max-w-screen-xl grow bg-neutral-50 px-12 pb-12 pt-[calc(80px+48px)] duration-300
        ${showNav && 'brightness-50'}`}
      >
        <Outlet />
      </div>
      <Footer showNav={showNav} />
    </div>
  );
}

export default Layout;
