import { bool } from 'prop-types';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
  const { showNav } = props;

  const mobileCss =
    'fixed top-[72px] z-50 h-[calc(100vh-128px)] w-60 flex-col overflow-auto bg-gray-100 py-6 px-12';
  const desktopCss = 'justify-center';

  return (
    <nav className={`flex grow gap-6 ${showNav ? mobileCss : desktopCss}`}>
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

Navigation.propTypes = {
  showNav: bool,
};

Navigation.defaultProps = {
  showNav: false,
};

export default Navigation;
