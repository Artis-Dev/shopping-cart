import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { number, shape, string } from 'prop-types';
import useCartActions from '../../../utils/cartActions';

function CartListItemRemove({ product }) {
  const { handleRemove } = useCartActions();

  return (
    <button
      type="button"
      className="rounded-lg bg-red-200 px-2 py-1 align-middle text-xs"
      onClick={() => handleRemove(product)}
    >
      <FontAwesomeIcon icon={faRemove} /> REMOVE
    </button>
  );
}

CartListItemRemove.propTypes = {
  product: shape({
    id: string,
    name: string,
    image: string,
    price: number,
    quantity: number,
  }).isRequired,
};

export default CartListItemRemove;
