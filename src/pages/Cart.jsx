import { useSelector } from 'react-redux';
import EmptyCart from '../components/Cart/EmptyCart';
import CartList from '../components/Cart/CartList/CartList';
import CartShipping from '../components/Cart/CartShipping';
import CartSummary from '../components/Cart/CartSummary';

function Cart() {
  const cart = useSelector((state) => state.cart);

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
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="w-full rounded-lg bg-gray-100 p-6 sm:w-1/2">
              <CartShipping />
            </div>
            <div className="w-full rounded-lg bg-gray-100 p-6 sm:w-1/2">
              <CartSummary />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
