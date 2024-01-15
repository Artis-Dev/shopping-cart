import { useSelector } from 'react-redux';
import EmptyCart from '../components/Cart/EmptyCart';
import CartList from '../components/Cart/CartList/CartList';
import CartShipping from '../components/Cart/CartShipping';
import CartSummary from '../components/Cart/CartSummary';

function Cart() {
  const { cart } = useSelector((state) => state);

  return (
    <div className="m-auto flex max-w-screen-xl flex-col gap-6 p-6 sm:p-12">
      {cart.length === 0 ? (
        <div className="w-full rounded-lg bg-gray-100 p-6">
          <EmptyCart />
        </div>
      ) : (
        <>
          <div className="w-full rounded-lg bg-gray-100 p-6">
            <CartList />
          </div>
          <div className="flex gap-6">
            <div className="w-1/2 rounded-lg bg-gray-100 p-6">
              <CartShipping />
            </div>
            <div className="w-1/2 rounded-lg bg-gray-100 p-6">
              <CartSummary />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
