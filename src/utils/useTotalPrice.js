import { useSelector } from 'react-redux';

const useTotalPrice = () => {
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  return totalPrice;
};

export default useTotalPrice;
