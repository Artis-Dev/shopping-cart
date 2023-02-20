import { useDispatch } from 'react-redux';
import { shape } from 'prop-types';

function AddToCartButton({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch({ type: 'CART_ADD', item });
  };

  return (
    <button
      type="button"
      className="w-full rounded-lg bg-white py-2 px-4"
      onClick={() => handleAddToCart(product)}
    >
      Add to cart
    </button>
  );
}

AddToCartButton.propTypes = {
  product: shape({}).isRequired,
};

export default AddToCartButton;
