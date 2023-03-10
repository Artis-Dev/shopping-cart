import { shape, string, number } from 'prop-types';
import { Link } from 'react-router-dom';
import prettyPrice from '../../../utils/prettyPrice';
import CartListItemCounter from './CartListItemCounter';
import CartListItemRemove from './CartListItemRemove';

function CartListItem({ product }) {
  return (
    <div className="mb-3 flex gap-2 border-b pb-3 last:mb-0 last:border-0 last:pb-0">
      <div className="h-32 w-24 shrink-0 sm:w-32">
        <Link to={`/shop/product/${product.id}`}>
          <img className="-ml-4 w-32 max-w-none" src={product.image} alt="" />
        </Link>
      </div>
      <div className="flex grow flex-col gap-2 md:flex-row">
        <div className="flex h-auto grow items-center overflow-hidden text-xl">
          <Link to={`/shop/product/${product.id}`}>{product.name}</Link>
        </div>
        <div className="flex h-auto shrink-0 items-center justify-between gap-2 md:justify-center">
          <div className="flex w-[89px] flex-col items-center gap-2">
            <CartListItemCounter product={product} />
            <CartListItemRemove product={product} />
          </div>
          <div className="flex h-auto shrink-0 self-end font-semibold md:w-32 md:justify-end md:self-center">
            {prettyPrice(product.price * product.quantity)}
          </div>
        </div>
      </div>
    </div>
  );
}

CartListItem.propTypes = {
  product: shape({
    id: string,
    name: string,
    image: string,
    price: number,
    quantity: number,
  }).isRequired,
};

export default CartListItem;
