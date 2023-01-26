import { bool, func } from 'prop-types';
import { NavLink } from 'react-router-dom';
import MenuButton from './MenuButton';

function SideNav(props) {
  const { handleShowNav, showNav } = props;

  return (
    <div className="sidenav fixed left-0 top-0 z-50 h-full w-60 grow overflow-auto bg-gray-100 py-6 px-12">
      <div className="mb-12">
        <MenuButton handleClick={handleShowNav} showNav={showNav} />
      </div>
      <nav className="flex flex-col gap-6">
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
    </div>
  );
}

SideNav.propTypes = {
  handleShowNav: func.isRequired,
  showNav: bool.isRequired,
};

export default SideNav;
