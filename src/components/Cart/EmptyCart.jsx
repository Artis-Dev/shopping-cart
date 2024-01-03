import NavButton from '../Shared/NavButton';

function EmptyCart() {
  return (
    <div className="w-full rounded-lg bg-gray-100">
      <div className="text-center">
        <h2 className="mb-6 text-2xl font-semibold">
          Your cart is currently empty.
        </h2>
        <h2 className="mb-6 text-xl font-semibold">
          Let&apos;s find your next favorite character to add to the collection!
        </h2>
        <NavButton link="/" text="Go shop" />
      </div>
    </div>
  );
}

export default EmptyCart;
