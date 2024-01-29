import prettyPrice from '../../../utils/prettyPrice';
import useTotalPrice from '../../../utils/useTotalPrice';

function CartListFooter() {
  const totalPrice = prettyPrice(useTotalPrice());

  return (
    <div className="mt-3 flex border-t pt-3 ">
      <div className="grow text-right font-semibold">{totalPrice}</div>
    </div>
  );
}

export default CartListFooter;
