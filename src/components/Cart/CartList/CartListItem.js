import { shape, string, number } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import prettyPrice from '../../../utils/prettyPrice';

function CartListItem({ product }) {
  return (
    <div
      className="mb-3 flex h-32 basis-0 items-center justify-between gap-6"
      key={product.id}
    >
      <div className="w-32 shrink-0">
        <img className="max-h-32" src={product.image} alt="" />
      </div>
      <div className="grow basis-1/2">{product.name}</div>
      <div className="grow basis-1/4 text-right">
        {prettyPrice(product.price)}
      </div>
      <div className="grow basis-1/4 text-center">
        <div className="mb-1">- {product.quantity} +</div>
        <button
          type="button"
          className="rounded-lg bg-gray-50 py-1 px-2 align-middle text-xs"
        >
          <FontAwesomeIcon icon={faRemove} /> REMOVE
        </button>
      </div>
      <div className="grow basis-1/4 text-right">
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
