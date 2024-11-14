import { useSelector } from 'react-redux';
import ThankYouListItem from './ThankYouListItem';
import ThankYouListHeader from './ThankYouListHeader';
import ThankYouListSummary from './ThankYouListSummary';

function ThankYouList() {
  const order = useSelector((state) => state.order.cart);

  return (
    <div>
      <ThankYouListHeader />
      <div>
        {order.map((product) => (
          <ThankYouListItem key={product.id} product={product} />
        ))}
      </div>
      <ThankYouListSummary />
    </div>
  );
}

export default ThankYouList;
