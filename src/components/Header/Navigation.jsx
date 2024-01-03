import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import useQueryActions from '../../utils/queryActions';

function Navigation() {
  const { categories } = useSelector((state) => state.filter);
  const { category } = useParams();
  const { handleReset } = useQueryActions();

  const activeStyle = {
    textDecoration: 'underline',
  };

  const isValidCategory = categories.includes(category);

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
        style={({ isActive }) =>
          isActive && (!category || isValidCategory) ? activeStyle : undefined
        }
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
