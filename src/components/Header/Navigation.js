import { NavLink } from 'react-router-dom';

function Navigation() {
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
