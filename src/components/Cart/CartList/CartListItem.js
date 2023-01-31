import { useDispatch } from 'react-redux';
import { shape, string, number } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import prettyPrice from '../../../utils/prettyPrice';

function CartListItem({ product }) {
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch({ type: 'INCREMENT_CART_ITEM', item });
  };

  const handleDecrement = (item) => {
    dispatch({ type: 'DECREMENT_CART_ITEM', item });
  };

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
        <div className="mb-2">
          <button
            type="button"
            className="rounded-l bg-gray-200 py-1 px-2 font-bold text-gray-800"
            onClick={() => handleDecrement(product)}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <input
            type="number"
            name=""
            id=""
            value={product.quantity}
            className="w-12 appearance-none rounded-none bg-gray-50 py-1 px-2 text-center"
            readOnly
            style={{ WebkitAppearance: 'textfield' }}
          />
          <button
            type="button"
            className="rounded-r bg-gray-200 py-1 px-2 font-bold text-gray-800"
            onClick={() => handleIncrement(product)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <button
          type="button"
          className="rounded-lg bg-gray-200 py-1 px-2 align-middle text-xs"
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
