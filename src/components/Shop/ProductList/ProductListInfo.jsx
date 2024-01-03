import { useSelector } from 'react-redux';

function ProductListInfo() {
  const { filter, sort } = useSelector((state) => state);
  const { filteredProducts } = filter;

  let firstProductIndex;
  let lastProductIndex;

  if (filteredProducts.length === 0) {
    firstProductIndex = 0;
    lastProductIndex = 0;
  } else if (sort.pageSize === 'all') {
    firstProductIndex = 1;
    lastProductIndex = filteredProducts.length;
  } else {
    firstProductIndex = (sort.currentPage - 1) * sort.pageSize + 1;
    lastProductIndex = firstProductIndex + sort.pageSize - 1;
    lastProductIndex = Math.min(
      firstProductIndex + sort.pageSize - 1,
      filteredProducts.length,
    );
  }
  return (
    <div className="mb-2 text-sm">
      Showing: {firstProductIndex} - {lastProductIndex} of{' '}
      {filteredProducts.length}
    </div>
  );
}

export default ProductListInfo;
