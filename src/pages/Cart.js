import { useSelector } from 'react-redux';

function Cart() {
  const { cart } = useSelector((state) => state);

  return (
    <>
      {cart.map((product) => {
        return (
          <p key={product.id}>
            {product.name}, Quantity: {product.quantity}
          </p>
        );
      })}
    </>
  );
}

export default Cart;
