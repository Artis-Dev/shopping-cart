import { useSelector } from 'react-redux';
import CartListFooter from './CartListFooter';
import CartListHeader from './CartListHeader';
import CartListItem from './CartListItem';

function CartList() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <CartListHeader />
      <div>
        {cart.map((product) => (
          <CartListItem key={product.id} product={product} />
        ))}
      </div>
      <CartListFooter />
    </>
  );
}

export default CartList;
