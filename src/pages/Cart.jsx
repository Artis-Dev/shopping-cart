import { useSelector } from 'react-redux';
import EmptyCart from '../components/Cart/EmptyCart';
import CartList from '../components/Cart/CartList/CartList';
import CartShipping from '../components/Cart/CartShipping';
import CartSummary from '../components/Cart/CartSummary';
import BuyButton from '../components/Cart/BuyButton';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const { selected } = useSelector((state) => state.shipping);
  const { showNotice } = useSelector((state) => state.ui);

  return (
    <div className="m-auto flex max-w-screen-xl flex-col gap-6 p-6 sm:p-12">
      {cart.length === 0 ? (
        <div className="w-full rounded-lg bg-gray-100 p-6">
          <EmptyCart />
        </div>
      ) : (
        <>
          {!selected && showNotice ? (
            <div className="w-full rounded-lg bg-red-100 p-6 text-red-900">
              <span className="font-semibold">ERROR:</span> Select shipping
              method!
            </div>
          ) : null}
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
          <BuyButton cart={cart} />
        </>
      )}
    </div>
  );
}

export default Cart;
