import { useSelector } from 'react-redux';
import useCartActions from '../../utils/cartActions';
import useTotalPrice from '../../utils/useTotalPrice';

function BuyButton() {
  const cart = useSelector((state) => state.cart);
  const shipping = useSelector((state) => state.shipping.selected);
  const totalPrice = useTotalPrice();
  const { handleBuy } = useCartActions();

  const order = { cart, totalPrice, shipping };

  return (
    <button
      className="inline-block rounded-lg bg-gray-700 px-8 py-4 text-white"
      type="button"
      onClick={() => handleBuy(order)}
    >
      Buy Now
    </button>
  );
}

export default BuyButton;
