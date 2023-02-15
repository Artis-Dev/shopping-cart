import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { number, shape } from 'prop-types';

function CartListItemQuantity({ product }) {
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch({ type: 'INCREMENT_CART_ITEM', item });
  };

  const handleDecrement = (item) => {
    dispatch({ type: 'DECREMENT_CART_ITEM', item });
  };

  return (
    <div className="flex text-center">
      <button
        type="button"
        className="rounded-l-lg bg-gray-200 py-1 px-2 font-bold text-gray-800"
        onClick={() => handleDecrement(product)}
      >
        <FontAwesomeIcon icon={faMinus} size="xs" />
      </button>
      <input
        type="number"
        name=""
        id=""
        value={product.quantity}
        className="w-9 appearance-none rounded-none bg-gray-50 py-1 px-1 text-center"
        readOnly
        style={{ WebkitAppearance: 'textfield' }}
      />
      <button
        type="button"
        className="rounded-r-lg bg-gray-200 py-1 px-2 font-bold text-gray-800"
        onClick={() => handleIncrement(product)}
      >
        <FontAwesomeIcon icon={faPlus} size="xs" />
      </button>
    </div>
  );
}

CartListItemQuantity.propTypes = {
  product: shape({
    quantity: number.isRequired,
  }).isRequired,
};

export default CartListItemQuantity;
