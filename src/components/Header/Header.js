import { bool, func } from 'prop-types';
import useMediaQuery from '../../hooks/useMediaQuery';
import Navigation from './Navigation';
import CartLink from './CartLink';
import Logo from './Logo';
import BurgerButton from './BurgerButton';

function Header(props) {
  const { handleShowNav, showNav } = props;

  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <div>
      <div
        className={`fixed flex w-full bg-gray-100 py-6 px-12 ${
          showNav && 'bg-gray-300 opacity-25'
        }`}
      >
        <div className="w-20 text-left">
          {isMobile ? <BurgerButton handleClick={handleShowNav} /> : <Logo />}
        </div>
        <div className="grow text-center">
          {isMobile ? <Logo /> : <Navigation />}
        </div>
        <div className="w-20 text-right">
          <CartLink />
        </div>
      </div>
      {showNav && <Navigation showNav={showNav} />}
    </div>
  );
}

Header.propTypes = {
  handleShowNav: func.isRequired,
  showNav: bool.isRequired,
};

export default Header;
