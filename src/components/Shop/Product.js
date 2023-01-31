import { number, shape, string } from 'prop-types';
import { useDispatch } from 'react-redux';
import prettyPrice from '../../utils/prettyPrice';

function Product({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', item });
  };

  return (
    <div className="h-auto min-w-[278px] max-w-full rounded-lg border border-gray-200">
      <img src={product.image} alt="" className="m-auto" />
      <div className="rounded-b-lg bg-gray-200 p-3">
        <h3 className="mb-1 text-xl">{product.name}</h3>
        <h4 className="mb-2 text-lg">{prettyPrice(product.price)}</h4>
        <button
          type="button"
          className="w-full rounded-lg bg-white py-2 px-4"
          onClick={() => handleAddToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: shape({
    id: string.isRequired,
    image: string.isRequired,
    name: string.isRequired,
    price: number.isRequired,
  }).isRequired,
};

export default Product;
