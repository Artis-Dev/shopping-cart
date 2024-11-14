import useMediaQuery from '../../utils/useMediaQuery';

function ThankYouListHeader() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <div className="mb-3 flex justify-between gap-2 border-b pb-3 font-semibold">
      <div className="w-32 shrink-0 grow">Products</div>
      {!isMobile && (
        <>
          <div className="w-[89px] text-center">Quantity</div>
          <div className="w-32 text-right">Total</div>
        </>
      )}
    </div>
  );
}

export default ThankYouListHeader;
