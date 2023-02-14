import { NavLink } from 'react-router-dom';
import useFilterActions from '../../utils/useFilterActions';

function Navigation() {
  const { handleReset } = useFilterActions();
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <nav className="flex flex-col gap-6 sm:grow sm:flex-row sm:justify-center">
      <NavLink
        to="/"
        className="link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/shop"
        onClick={handleReset}
        className="link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Shop
      </NavLink>
      <NavLink
        to="/contacts"
        className="link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Contacts
      </NavLink>
    </nav>
  );
}

export default Navigation;
