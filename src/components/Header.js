import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';

function Header() {
  return (
    <div className="flex bg-gray-100 py-6 px-12">
      <div className="w-60 text-left">
        <NavLink to="/">LOGO</NavLink>
      </div>
      <Navigation />
      <div className="w-60 text-right">
        <NavLink to="/Cart">Cart</NavLink>
      </div>
    </div>
  );
}

export default Header;
