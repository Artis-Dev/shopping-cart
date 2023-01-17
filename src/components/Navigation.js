import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="flex grow justify-center gap-6">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
}

export default Navigation;
