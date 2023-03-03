import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { shape } from 'prop-types';
import useCartActions from '../../../utils/cartActions';

function CartListItemRemove({ product }) {
  const { handleRemove } = useCartActions();

  return (
    <button
      type="button"
      className="rounded-lg bg-red-200 py-1 px-2 align-middle text-xs"
      onClick={() => handleRemove(product)}
    >
      <FontAwesomeIcon icon={faRemove} /> REMOVE
    </button>
  );
}

CartListItemRemove.propTypes = {
  product: shape({}).isRequired,
};

export default CartListItemRemove;
