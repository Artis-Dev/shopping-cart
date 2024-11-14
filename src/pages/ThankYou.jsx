import { useSelector } from 'react-redux';
import PageNotFound from './PageNotFound';
import ThankYouList from '../components/ThankYou/ThankYouList';

function ThankYou() {
  const order = useSelector((state) => state.order);

  if (!order) {
    return <PageNotFound />;
  }

  return (
    <div className="m-auto flex max-w-screen-xl gap-6 p-6 sm:p-12">
      <div className="w-full rounded-lg bg-gray-100 px-12 py-6">
        <div className="text-center">
          <h2 className="mb-6 text-2xl font-semibold">Thank you!</h2>
          <h2 className="mb-12 text-xl font-semibold">
            Thank you for your purchase! Your order has been successfully
            placed.
          </h2>
          <h2 className="mb-6 text-left text-lg font-semibold">
            Your order summary:
          </h2>
        </div>
        <ThankYouList />
      </div>
    </div>
  );
}

export default ThankYou;
