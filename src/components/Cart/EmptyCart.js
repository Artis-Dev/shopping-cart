function EmptyCart() {
  return (
    <div className="m-auto flex max-w-screen-xl gap-6 p-12">
      <div className="w-full rounded-lg bg-gray-100 px-12 py-6">
        <div className="text-center font-semibold">
          <h2 className="text-2xl">Your cart is empty</h2>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
