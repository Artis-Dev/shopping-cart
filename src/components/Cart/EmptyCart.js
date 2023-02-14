import NavButton from '../Shared/NavButton';

function EmptyCart() {
  return (
    <div className="w-full rounded-lg bg-gray-100">
      <div className="text-center">
        <h2 className="mb-6 text-2xl font-semibold">Your cart is empty</h2>
        <NavButton link="/shop" text="Go Shop" />
      </div>
    </div>
  );
}

export default EmptyCart;
