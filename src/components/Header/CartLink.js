import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartLink() {
  return (
    <NavLink
      to="/cart"
      className={({ isActive }) => (isActive ? 'text-gray-700' : undefined)}
    >
      <FontAwesomeIcon icon={faShoppingCart} />
    </NavLink>
  );
}

export default CartLink;
