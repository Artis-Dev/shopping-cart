import { func } from 'prop-types';
import Navigation from './Navigation';
import useMediaQuery from '../../hooks/useMediaQuery';
import CartLink from './CartLink';
import Logo from './Logo';
import BurgerButton from './BurgerIcon';

function Header(props) {
  const { handleShowNav } = props;

  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <div className="flex bg-gray-100 py-6 px-12">
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
  );
}

Header.propTypes = {
  handleShowNav: func.isRequired,
};

export default Header;
