import { bool, number, shape } from 'prop-types';
import { useSelector } from 'react-redux';
import useCartActions from '../../utils/cartActions';
import prettyPrice from '../../utils/prettyPrice';

function ShippingMethod({ method, disabled, totalPrice }) {
  const { selected } = useSelector((state) => state.shipping);
  const { handleShippingMethod } = useCartActions();

  return (
    <label htmlFor={method.value}>
      <div className="flex justify-between gap-2">
        <div>
          <input
            className="mr-2"
            type="radio"
            id={method.value}
            name="contact"
            value={method.value}
            onChange={() => handleShippingMethod(method)}
            checked={JSON.stringify(selected) === JSON.stringify(method)}
            disabled={disabled}
          />
          {method.title}{' '}
          {disabled && (
            <span className="whitespace-pre text-slate-500">
              For free shipping left {50 - totalPrice} €
            </span>
          )}
        </div>
        <span className="min-w-14 text-right">{prettyPrice(method.price)}</span>
      </div>
    </label>
  );
}

ShippingMethod.propTypes = {
  method: shape({}).isRequired,
  disabled: bool,
  totalPrice: number,
};

ShippingMethod.defaultProps = {
  disabled: false,
  totalPrice: 0,
};

export default ShippingMethod;
