import { useSelector } from 'react-redux';
import prettyPrice from '../../../utils/prettyPrice';

function CartListFooter() {
  const { cart } = useSelector((state) => state);

  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div className="mt-3 flex border-t pt-3 font-semibold">
      <div className="grow text-right">{prettyPrice(totalPrice)}</div>
    </div>
  );
}

export default CartListFooter;
