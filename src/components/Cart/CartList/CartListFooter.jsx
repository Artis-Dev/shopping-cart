import { useSelector } from 'react-redux';
import prettyPrice from '../../../utils/prettyPrice';

function CartListFooter() {
  const { cart } = useSelector((state) => state);

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  return (
    <div className="mt-3 flex border-t pt-3 ">
      <div className="grow text-right font-semibold">
        {prettyPrice(totalPrice)}
      </div>
    </div>
  );
}

export default CartListFooter;
