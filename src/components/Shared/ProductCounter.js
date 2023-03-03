import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { shape } from 'prop-types';
import useCartActions from '../../utils/cartActions';

function ProductCounter({ product }) {
  const { cart } = useSelector((state) => state);
  const { handleIncrement, handleDecrement } = useCartActions();
  const itemIndex = cart.findIndex((item) => item.id === product.id);

  return (
    <div className="flex text-center">
      <button
        type="button"
        className="rounded-l-lg bg-gray-200 py-1 px-2 font-bold text-gray-800"
        onClick={(e) => handleDecrement(product, e)}
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
        onClick={(e) => handleIncrement(product, e)}
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
