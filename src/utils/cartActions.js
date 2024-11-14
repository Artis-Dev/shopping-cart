import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useCartActions = () => {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.shipping);
  const navigate = useNavigate();

  const handleAddToCart = (item, event) => {
    event.preventDefault();
    dispatch({ type: 'CART_ADD', item });
  };

  const handleRemove = (item) => {
    dispatch({ type: 'CART_REMOVE', item });
  };

  const handleIncrement = (item, event) => {
    event.preventDefault();
    dispatch({ type: 'CART_INCREMENT', item });
  };

  const handleDecrement = (item, event) => {
    event.preventDefault();
    dispatch({ type: 'CART_DECREMENT', item });
  };

  const handleShippingMethod = (item) => {
    dispatch({ type: 'SHIPPING_CHANGE_METHOD', item });
  };

  const handleUncheckShippingMethod = () => {
    dispatch({ type: 'SHIPPING_UNCHECK_METHOD' });
  };

  const handleBuy = (item) => {
    if (selected) {
      handleUncheckShippingMethod();
      dispatch({ type: 'CART_BUY', item });
      navigate('/thank-you');
    } else {
      dispatch({ type: 'UI_SHOW_NOTICE' });
      window.scrollTo(0, 0);
    }
  };

  return {
    handleAddToCart,
    handleRemove,
    handleIncrement,
    handleDecrement,
    handleShippingMethod,
    handleUncheckShippingMethod,
    handleBuy,
  };
};

export default useCartActions;
