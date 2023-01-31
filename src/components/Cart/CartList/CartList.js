import { shape } from 'prop-types';
import CartListHeader from './CartListHeader';
import CartListItem from './CartListItem';

function CartList({ cart }) {
  return (
    <>
      <CartListHeader />
      {cart.map((product) => {
        return <CartListItem product={product} />;
      })}
    </>
  );
}

CartList.propTypes = {
  cart: shape([]).isRequired,
};

export default CartList;
