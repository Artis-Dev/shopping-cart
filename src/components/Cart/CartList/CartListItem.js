import { shape, string, number } from 'prop-types';
import prettyPrice from '../../../utils/prettyPrice';
import CartListItemQuantity from './CartListItemQuantity';

function CartListItem({ product }) {
  return (
    <div
      className="mb-3 flex h-32 basis-0 items-center justify-between gap-4"
      key={product.id}
    >
      <div className="w-32 shrink-0">
        <img className="max-h-32" src={product.image} alt="" />
      </div>
      <div className="grow basis-1/3">{product.name}</div>
      <div className="grow basis-1/6 text-right">
        {prettyPrice(product.price)}
      </div>
      <CartListItemQuantity product={product} />
      <div className="grow basis-1/6 text-right">
        {prettyPrice(product.price * product.quantity)}
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
