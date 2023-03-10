import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useMediaQuery from '../../utils/useMediaQuery';
import Navigation from './Navigation';
import SideNav from './SideNav';
import CartLink from './CartLink';
import Logo from './Logo';
import MenuButton from './MenuButton';

function Header() {
  const dispatch = useDispatch();
  const { showNav } = useSelector((state) => state.ui);
  const isMobile = useMediaQuery('(max-width: 639px)');

  const toggleNav = useCallback(() => {
    dispatch({ type: 'UI_TOGGLE_NAV' });
  }, [dispatch]);

  const disableNav = useCallback(() => {
    dispatch({ type: 'UI_DISABLE_NAV' });
  }, [dispatch]);

  const handleShowNav = useCallback(() => {
    if (isMobile) {
      toggleNav();
    }
  }, [isMobile, toggleNav]);

  useEffect(() => {
    if (!isMobile) {
      disableNav();
    }
  }, [isMobile, disableNav]);

  useEffect(() => {
    const handleClick = (event) => {
      if (
        showNav &&
        (!event.target.closest('.sidenav') || event.target.closest('.link'))
      ) {
        disableNav();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [showNav, disableNav]);

  return (
    <div>
      <div
        className={`fixed z-40 w-full bg-gray-100 duration-300 ${
          showNav && 'brightness-50'
        }`}
      >
        <div className="m-auto flex max-w-screen-xl items-center p-6 sm:px-12">
          <div className="w-20">
            {isMobile ? <MenuButton handleClick={handleShowNav} /> : <Logo />}
          </div>
          <div className="grow text-center">
            {isMobile ? <Logo /> : <Navigation />}
          </div>
          <div className="flex w-20 justify-end">
            <CartLink />
          </div>
        </div>
      </div>
      {showNav && <SideNav handleShowNav={handleShowNav} />}
    </div>
  );
}

export default Header;
