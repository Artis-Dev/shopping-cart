import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="flex flex-col gap-6 sm:grow sm:flex-row sm:justify-center">
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
