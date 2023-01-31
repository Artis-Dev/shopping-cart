function CartListHeader() {
  return (
    <div className="mb-3 flex justify-between gap-6 border-b pb-3 font-semibold">
      <div className="w-32 shrink-0">Products</div>
      <div className="grow basis-1/2" />
      <div className="grow basis-1/4 text-right">Price</div>
      <div className="grow basis-1/4 text-center">Quantity</div>
      <div className="grow basis-1/4 text-right">Total</div>
    </div>
  );
}

export default CartListHeader;
