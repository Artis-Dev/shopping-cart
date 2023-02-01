import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { number, shape } from 'prop-types';

function CartListItemQuantity({ product }) {
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch({ type: 'INCREMENT_CART_ITEM', item });
  };

  const handleDecrement = (item) => {
    dispatch({ type: 'DECREMENT_CART_ITEM', item });
  };

  const handleRemove = (item) => {
    dispatch({ type: 'REMOVE_CART_ITEM', item });
  };

  return (
    <div className="grow basis-1/5 text-center">
      <div className="mb-2">
        <button
          type="button"
          className="rounded-l bg-gray-200 py-1 px-2 font-bold text-gray-800"
          onClick={() => handleDecrement(product)}
        >
          <FontAwesomeIcon icon={faMinus} size="xs" />
        </button>
        <input
          type="number"
          name=""
          id=""
          value={product.quantity}
          className="w-10 appearance-none rounded-none bg-gray-50 py-1 px-1 text-center"
          readOnly
          style={{ WebkitAppearance: 'textfield' }}
        />
        <button
          type="button"
          className="rounded-r bg-gray-200 py-1 px-2 font-bold text-gray-800"
          onClick={() => handleIncrement(product)}
        >
          <FontAwesomeIcon icon={faPlus} size="xs" />
        </button>
      </div>
      <button
        type="button"
        className="rounded-lg bg-gray-200 py-1 px-2 align-middle text-xs"
        onClick={() => handleRemove(product)}
      >
        <FontAwesomeIcon icon={faRemove} /> REMOVE
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
