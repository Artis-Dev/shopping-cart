import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { number, shape, string } from 'prop-types';
import useCartActions from '../../../utils/cartActions';

function CartListItemCounter({ product }) {
  const cart = useSelector((state) => state.cart);
  const { handleIncrement, handleDecrement } = useCartActions();
  const itemIndex = cart.findIndex((item) => item.id === product.id);

  return (
    <div className="flex text-center">
      <button
        type="button"
        aria-label="Decrease the quantity"
        className="rounded-l-lg bg-gray-200 px-2 py-1 font-bold text-gray-800"
        onClick={(e) => handleDecrement(product, e)}
      >
        <FontAwesomeIcon icon={faMinus} size="xs" />
      </button>
      <input
        type="number"
        name=""
        id=""
        value={itemIndex !== -1 ? cart[itemIndex].quantity : 0}
        className="w-9 appearance-none rounded-none bg-gray-50 px-1 py-1 text-center"
        readOnly
        style={{ WebkitAppearance: 'textfield' }}
      />
      <button
        type="button"
        aria-label="Increase the quantity"
        className="rounded-r-lg bg-gray-200 px-2 py-1 font-bold text-gray-800"
        onClick={(e) => handleIncrement(product, e)}
      >
        <FontAwesomeIcon icon={faPlus} size="xs" />
      </button>
    </div>
  );
}

CartListItemCounter.propTypes = {
  product: shape({
    id: string,
    name: string,
    image: string,
    price: number,
    quantity: number,
  }).isRequired,
};

export default CartListItemCounter;
