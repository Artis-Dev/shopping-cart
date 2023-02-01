import { useSelector } from 'react-redux';
import CartListFooter from './CartListFooter';
import CartListHeader from './CartListHeader';
import CartListItem from './CartListItem';

function CartList() {
  const { cart } = useSelector((state) => state);

  return (
    <>
      <CartListHeader />
      {cart.map((product) => {
        return <CartListItem key={product.id} product={product} />;
      })}
      <CartListFooter />
    </>
  );
}

export default CartList;
