import { shape } from 'prop-types';
import useCartActions from '../../utils/cartActions';

function AddToCartButton({ product }) {
  const { handleAddToCart } = useCartActions();

  return (
    <button
      type="button"
      className="w-full rounded-lg bg-white px-4 py-2"
      onClick={(e) => handleAddToCart(product, e)}
    >
      Add to cart
    </button>
  );
}

AddToCartButton.propTypes = {
  product: shape({}).isRequired,
};

export default AddToCartButton;
