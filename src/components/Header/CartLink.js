import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartLink() {
  return (
    <div className="flex h-8 w-8 items-center justify-center">
      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? 'text-gray-700' : undefined)}
      >
        <FontAwesomeIcon icon={faShoppingCart} className="self-center" />
      </NavLink>
    </div>
  );
}

export default CartLink;
