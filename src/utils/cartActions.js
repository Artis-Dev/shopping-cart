import { useDispatch } from 'react-redux';

const useCartActions = () => {
  const dispatch = useDispatch();

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

  return {
    handleAddToCart,
    handleRemove,
    handleIncrement,
    handleDecrement,
  };
};

export default useCartActions;
