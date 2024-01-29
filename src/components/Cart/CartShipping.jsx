import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ShippingMethod from './ShippingMethod';
import useTotalPrice from '../../utils/useTotalPrice';
import useCartActions from '../../utils/cartActions';

function CartShipping() {
  const { shippingMethods, selected } = useSelector((state) => state.shipping);
  const { handleUncheckShippingMethod } = useCartActions();
  const totalPrice = useTotalPrice();

  useEffect(() => {
    if (
      JSON.stringify(selected) === JSON.stringify(shippingMethods.free) &&
      totalPrice < 50
    ) {
      handleUncheckShippingMethod();
    }
  }, [handleUncheckShippingMethod, selected, shippingMethods.free, totalPrice]);

  return (
    <div>
      <p className="mb-4 text-2xl font-semibold">Shipping</p>
      <div className="flex flex-col gap-2">
        <ShippingMethod
          method={shippingMethods.free}
          disabled={totalPrice < 50}
          totalPrice={totalPrice}
        />
        <div className="border-b" />
        <ShippingMethod method={shippingMethods.local} />
        <div className="border-b" />
        <ShippingMethod method={shippingMethods.parcel} />
        <div className="border-b" />
        <ShippingMethod method={shippingMethods.courier} />
      </div>
    </div>
  );
}

export default CartShipping;
