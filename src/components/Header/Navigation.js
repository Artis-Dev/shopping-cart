import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="flex grow justify-center gap-6">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'underline' : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) => (isActive ? 'underline' : undefined)}
      >
        Shop
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? 'underline' : undefined)}
      >
        Contacts
      </NavLink>
    </nav>
  );
}

export default Navigation;
