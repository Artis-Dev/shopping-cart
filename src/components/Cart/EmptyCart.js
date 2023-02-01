import NavButton from '../Shared/NavButton';

function EmptyCart() {
  return (
    <div className="m-auto flex max-w-screen-xl gap-6 p-12">
      <div className="w-full rounded-lg bg-gray-100 px-12 py-6">
        <div className="text-center">
          <h2 className="mb-6 text-2xl font-semibold">Your cart is empty</h2>
          <NavButton link="/shop" text="Go Shop" />
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
