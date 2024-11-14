import { shape, string, number } from 'prop-types';
import { Link } from 'react-router-dom';
import prettyPrice from '../../utils/prettyPrice';

function ThankYouListItem({ product }) {
  const price = prettyPrice(product.price * product.quantity);

  return (
    <div className="mb-3 flex gap-2 border-b pb-3 last:mb-0 last:border-0 last:pb-0">
      <div className="shrink-0">
        <Link to={`/shop/product/${product.id}`}>
          <img
            className="w-32 rounded-lg border"
            src={product.image}
            alt={product.name}
          />
        </Link>
      </div>
      <div className="flex grow flex-col gap-2 md:flex-row">
        <div className="flex h-auto grow items-center overflow-hidden text-xl">
          <Link to={`/shop/product/${product.id}`}>{product.name}</Link>
        </div>
        <div className="flex h-auto shrink-0 items-center justify-between gap-2 md:justify-center">
          <div className="flex w-[89px] items-center justify-center gap-1 font-semibold">
            {product.quantity} pc.
          </div>
          <div className="flex h-auto shrink-0 self-end font-semibold md:w-32 md:justify-end md:self-center">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
}

ThankYouListItem.propTypes = {
  product: shape({
    id: string,
    name: string,
    image: string,
    price: number,
    quantity: number,
  }).isRequired,
};

export default ThankYouListItem;
