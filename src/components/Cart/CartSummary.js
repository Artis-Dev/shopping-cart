import { useSelector } from 'react-redux';
import prettyPrice from '../../utils/prettyPrice';

function CartSummary() {
  const { cart } = useSelector((state) => state);

  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const tax = totalPrice * 0.21;
  const subtotal = totalPrice - tax;
  const shipping = 8;
  const orderTotal = totalPrice + shipping;

  return (
    <div>
      <p className="mb-4 text-2xl font-semibold">Summary</p>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="">Subtotal:</p>
          <p className="">{prettyPrice(subtotal)}</p>
        </div>
        <div className="flex justify-between">
          <p className="">Tax (21%):</p>
          <p className="">{prettyPrice(tax)}</p>
        </div>
        <div className="flex justify-between">
          <p className="">Shipping:</p>
          <p className="">{prettyPrice(shipping)}</p>
        </div>
        <div className="border" />
        <div className="flex justify-between">
          <p className="">Order total:</p>
          <p className="">{prettyPrice(orderTotal)}</p>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
