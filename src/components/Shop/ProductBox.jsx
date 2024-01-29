import { number, shape, string } from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import prettyPrice from '../../utils/prettyPrice';
import AddToCartButton from './AddToCartButton';
import ProductCartQuantity from './ProductCartQuantity';

function Product({ product }) {
  const { cart } = useSelector((state) => state);

  const isInCart = cart.find((item) => item.id === product.id);
  const price = prettyPrice(product.price);
  return (
    <Link
      to={`/shop/product/${product.id}`}
      className="flex h-auto flex-col rounded-lg border border-gray-200"
    >
      <img src={product.image} alt={product.name} className="mx-auto my-4" />
      <div className="flex grow flex-col rounded-b-lg bg-gray-200 p-3">
        <h3 className="mb-1  grow text-xl">{product.name}</h3>
        <h4 className="mb-2 text-lg">{price}</h4>
        {isInCart ? (
          <ProductCartQuantity product={product} />
        ) : (
          <AddToCartButton product={product} />
        )}
      </div>
    </Link>
  );
}

Product.propTypes = {
  product: shape({
    id: string.isRequired,
    image: string.isRequired,
    name: string.isRequired,
    price: number.isRequired,
    quantity: number,
  }).isRequired,
};

export default Product;
