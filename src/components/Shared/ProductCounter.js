import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { shape } from 'prop-types';

function ProductCounter({ product }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch({ type: 'CART_INCREMENT', item });
  };

  const handleDecrement = (item) => {
    dispatch({ type: 'CART_DECREMENT', item });
  };

  const itemIndex = cart.findIndex((item) => item.id === product.id);

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
        value={itemIndex !== -1 ? cart[itemIndex].quantity : 0}
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

ProductCounter.propTypes = {
  product: shape({}).isRequired,
};

export default ProductCounter;
