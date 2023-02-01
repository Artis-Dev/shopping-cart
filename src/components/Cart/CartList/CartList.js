import { arrayOf, shape } from 'prop-types';
import CartListHeader from './CartListHeader';
import CartListItem from './CartListItem';

function CartList({ cart }) {
  return (
    <>
      <CartListHeader />
      {cart.map((product) => {
        return <CartListItem key={product.id} product={product} />;
      })}
    </>
  );
}

CartList.propTypes = {
  cart: arrayOf(shape({})).isRequired,
};

export default CartList;
