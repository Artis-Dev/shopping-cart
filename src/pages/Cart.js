import { useSelector } from 'react-redux';
import EmptyCart from '../components/Cart/EmptyCart';
import CartList from '../components/Cart/CartList/CartList';

function Cart() {
  const { cart } = useSelector((state) => state);

  return (
    <div className="m-auto flex max-w-screen-xl gap-6 p-12">
      <div className="w-full rounded-lg bg-gray-100 p-6">
        {cart.length === 0 ? <EmptyCart /> : <CartList cart={cart} />}
      </div>
    </div>
  );
}

export default Cart;
