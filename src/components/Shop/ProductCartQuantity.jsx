import { useSelector } from 'react-redux';
import { number, shape, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import useCartActions from '../../utils/cartActions';

function ProductCartQuantity({ product }) {
  const cart = useSelector((state) => state.cart);
  const { handleIncrement, handleDecrement } = useCartActions();
  const productIndex = cart.findIndex((item) => item.id === product.id);

  return (
    <div className="flex">
      <button
        type="button"
        aria-label="Decrease the quantity"
        className="rounded-l-lg bg-white px-4 py-2 font-bold text-gray-800"
        onClick={(e) => handleDecrement(product, e)}
      >
        <FontAwesomeIcon icon={faMinus} size="xs" />
      </button>
      <input
        type="number"
        name=""
        id=""
        value={cart[productIndex].quantity}
        className="p2 flex w-full appearance-none rounded-none border-b-2 border-t-2 border-white bg-gray-200 text-center"
        readOnly
        style={{ WebkitAppearance: 'textfield' }}
        onClick={(e) => e.preventDefault()}
      />
      <button
        type="button"
        aria-label="Increase the quantity"
        className="rounded-r-lg bg-white px-4 py-2 font-bold text-gray-800"
        onClick={(e) => handleIncrement(product, e)}
      >
        <FontAwesomeIcon icon={faPlus} size="xs" />
      </button>
    </div>
  );
}

ProductCartQuantity.propTypes = {
  product: shape({
    id: string,
    name: string,
    image: string,
    price: number,
    quantity: number,
  }).isRequired,
};

export default ProductCartQuantity;
