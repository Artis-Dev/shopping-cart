import { useSelector } from 'react-redux';
import prettyPrice from '../../utils/prettyPrice';

function ThankYouSummary() {
  const order = useSelector((state) => state.order);

  const { totalPrice } = order;
  const tax = totalPrice * 0.21;
  const prettyTax = prettyPrice(totalPrice * 0.21);
  const subtotal = prettyPrice(totalPrice - tax);
  const shippingPrice = order.shipping.price;
  const prettyShippingPrice = prettyPrice(shippingPrice);
  const orderTotal = prettyPrice(totalPrice + shippingPrice);

  return (
    <div className="mt-3 flex grow flex-col gap-2 border-t pt-3 text-right font-semibold">
      <div className="flex justify-between gap-2">
        <p>Subtotal:</p>
        <p className="min-w-14 text-right">{subtotal}</p>
      </div>
      <div className="flex justify-between gap-2">
        <p>Tax (21%):</p>
        <p className="min-w-14 text-right">{prettyTax}</p>
      </div>
      <div className="flex justify-between gap-2">
        <p>Shipping:</p>
        <p className="min-w-14 text-right">{prettyShippingPrice}</p>
      </div>
      <div className="border-b" />
      <div className="flex  justify-between gap-2">
        <p>Order total:</p>
        <p className="min-w-14 text-right">{orderTotal}</p>
      </div>
      <div className="flex justify-between gap-2">
        <p>Shipping method:</p>
        <p className="min-w-14 text-right">{order.shipping.title}</p>
      </div>
    </div>
  );
}

export default ThankYouSummary;
