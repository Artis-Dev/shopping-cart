import { bool, func } from 'prop-types';
import useMediaQuery from '../../hooks/useMediaQuery';
import Navigation from './Navigation';
import SideNav from './SideNav';
import CartLink from './CartLink';
import Logo from './Logo';
import MenuButton from './MenuButton';

function Header(props) {
  const { handleShowNav, showNav } = props;

  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <div>
      <div
        className={`fixed z-40 w-full bg-gray-100 duration-300 ${
          showNav && 'brightness-50'
        }`}
      >
        <div className="m-auto flex max-w-screen-xl py-6 px-12">
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
      {showNav && <SideNav handleShowNav={handleShowNav} showNav={showNav} />}
    </div>
  );
}

Header.propTypes = {
  handleShowNav: func.isRequired,
  showNav: bool.isRequired,
};

export default Header;
