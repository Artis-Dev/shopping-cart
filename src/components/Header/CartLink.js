import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartLink() {
  const { cart } = useSelector((state) => state);

  const totalProducts = cart.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  return (
    <div className="flex h-8 w-8 items-center justify-center">
      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? 'text-gray-700' : undefined)}
      >
        <span
          className={`${
            totalProducts > 0 ? 'fa-layers align-text-bottom' : ''
          } fa-fw fa-lg`}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          {totalProducts > 0 && (
            <span className="fa-layers-counter translate-x-1/4 -translate-y-1/4 scale-50 border-4 border-gray-100">
              {totalProducts}
            </span>
          )}
        </span>
      </NavLink>
    </div>
  );
}

export default CartLink;
