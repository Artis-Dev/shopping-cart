import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Navigation from './Navbar';

function Header() {
  return (
    <div className="flex bg-gray-100 py-6 px-12">
      <div className="w-60 text-left">
        <NavLink to="/">LOGO</NavLink>
      </div>
      <Navigation />
      <div className="w-60 text-right">
        <NavLink to="/Cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
