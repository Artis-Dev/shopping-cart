import { useSelector } from 'react-redux';
import prettyPrice from '../../utils/prettyPrice';
import useTotalPrice from '../../utils/useTotalPrice';

function CartSummary() {
  const shipping = useSelector((state) => state.shipping);

  const totalPrice = useTotalPrice();
  const tax = totalPrice * 0.21;
  const subtotal = totalPrice - tax;
  let shippingPrice = shipping.selected.price;
  let orderTotal;

  if (typeof shipping.selected.price === 'number') {
    orderTotal = totalPrice + shippingPrice;
    shippingPrice = prettyPrice(shippingPrice);
  } else {
    orderTotal = totalPrice;
    shippingPrice = 'Select shipping method';
  }

  return (
    <div>
      <p className="mb-4 text-2xl font-semibold">Summary</p>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between gap-2">
          <p>Subtotal:</p>
          <p className="min-w-14 text-right">{prettyPrice(subtotal)}</p>
        </div>
        <div className="flex justify-between gap-2">
          <p>Tax (21%):</p>
          <p className="min-w-14 text-right">{prettyPrice(tax)}</p>
        </div>
        <div className="flex justify-between gap-2">
          <p>Shipping:</p>
          <p className="min-w-14 text-right">{shippingPrice}</p>
        </div>
        <div className="border-b" />
        <div className="flex  justify-between gap-2">
          <p>Order total:</p>
          <p className="min-w-14 text-right">{prettyPrice(orderTotal)}</p>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
