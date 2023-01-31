import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import prettyPrice from '../utils/prettyPrice';
import EmptyCart from '../components/Cart/EmptyCart';

function Cart() {
  const { cart } = useSelector((state) => state);

  return (
    <div className="m-auto flex max-w-screen-xl gap-6 p-12">
      <div className="w-full rounded-lg bg-gray-100 px-12 py-6">
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <div>
            <div className="mb-3 flex justify-between gap-6 border-b pb-3 font-semibold">
              <div className="grow basis-full">Product</div>
              <div className="grow basis-full" />
              <div className="grow basis-full text-center">Quantity</div>
              <div className="grow basis-full text-right">Total</div>
              <div className="grow basis-full text-right">Remove</div>
            </div>
            {cart.map((product) => {
              return (
                <div
                  className="flex h-32 basis-0 items-center justify-between gap-6"
                  key={product.id}
                >
                  <div className="grow basis-full">
                    <img className="max-h-32" src={product.image} alt="" />
                  </div>
                  <div className="grow basis-full">{product.name}</div>
                  <div className="grow basis-full text-center">
                    - {product.quantity} +
                  </div>
                  <div className="grow basis-full text-right">
                    {prettyPrice(product.price * product.quantity)}
                  </div>
                  <div className="grow basis-full text-right">
                    <FontAwesomeIcon icon={faRemove} size="lg" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
