import { number, shape, string } from 'prop-types';
import { useSelector } from 'react-redux';
import prettyPrice from '../../utils/prettyPrice';
import AddToCartButton from './AddToCartButton';
import ProductCartQuantity from './ProductCartQuantity';

function Product({ product }) {
  const { cart } = useSelector((state) => state);

  const isInCart = cart.find((item) => item.id === product.id);

  return (
    <div className="h-auto min-w-[278px] max-w-full rounded-lg border border-gray-200">
      <img src={product.image} alt="" className="m-auto" />
      <div className="rounded-b-lg bg-gray-200 p-3">
        <h3 className="mb-1 text-xl">{product.name}</h3>
        <h4 className="mb-2 text-lg">{prettyPrice(product.price)}</h4>
        {isInCart ? (
          <ProductCartQuantity product={product} />
        ) : (
          <AddToCartButton product={product} />
        )}
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
    quantity: number,
  }).isRequired,
};

export default Product;
