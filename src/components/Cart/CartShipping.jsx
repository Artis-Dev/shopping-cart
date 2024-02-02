import { useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import ShippingMethod from './ShippingMethod';
import useTotalPrice from '../../utils/useTotalPrice';
import useCartActions from '../../utils/cartActions';

function CartShipping() {
  const { shippingMethods, selected } = useSelector((state) => state.shipping);
  const { handleUncheckShippingMethod } = useCartActions();
  const totalPrice = useTotalPrice();

  useEffect(() => {
    if (selected.id === 'free' && totalPrice < 50) {
      handleUncheckShippingMethod();
    }
  }, [handleUncheckShippingMethod, selected.id, totalPrice]);

  return (
    <div>
      <p className="mb-4 text-2xl font-semibold">Shipping</p>
      <div className="flex flex-col gap-2">
        {shippingMethods.map((method, index) => (
          <Fragment key={method.id}>
            <ShippingMethod
              method={method}
              disabled={method.id === 'free' && totalPrice < 50}
              totalPrice={totalPrice}
            />
            {index < shippingMethods.length - 1 && <div className="border-b" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default CartShipping;
