import { useDispatch, useSelector } from 'react-redux';
import { shape } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function ProductCartQuantity({ product }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch({ type: 'CART_INCREMENT', item });
  };

  const handleDecrement = (item) => {
    dispatch({ type: 'CART_DECREMENT', item });
  };

  const productIndex = cart.findIndex((item) => item.id === product.id);

  return (
    <div className="flex">
      <button
        type="button"
        className="rounded-l-lg bg-white py-2 px-4 font-bold text-gray-800"
        onClick={() => handleDecrement(product)}
      >
        <FontAwesomeIcon icon={faMinus} size="xs" />
      </button>
      <input
        type="number"
        name=""
        id=""
        value={cart[productIndex].quantity}
        className="p2 flex w-full appearance-none rounded-none border-t-2 border-b-2 border-white bg-gray-200 text-center"
        readOnly
        style={{ WebkitAppearance: 'textfield' }}
      />
      <button
        type="button"
        className="rounded-r-lg bg-white py-2 px-4 font-bold text-gray-800"
        onClick={() => handleIncrement(product)}
      >
        <FontAwesomeIcon icon={faPlus} size="xs" />
      </button>
    </div>
  );
}

ProductCartQuantity.propTypes = {
  product: shape({}).isRequired,
};

export default ProductCartQuantity;
