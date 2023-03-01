import { useSelector } from 'react-redux';
import useFilterActions from '../../utils/useFilterActions';

function ProductListSort() {
  const { filter, sort } = useSelector((state) => state);
  const { filteredProducts } = filter;

  const { handleChangeSort, handleChangeProductCount } = useFilterActions();

  let firstProductIndex;
  let lastProductIndex;

  if (sort.pageSize === 'all') {
    firstProductIndex = 1;
    lastProductIndex = filteredProducts.length;
  } else {
    firstProductIndex = (sort.currentPage - 1) * sort.pageSize + 1;
    lastProductIndex = firstProductIndex + sort.pageSize - 1;
    lastProductIndex = Math.min(
      firstProductIndex + sort.pageSize - 1,
      filteredProducts.length
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="mb-2 text-sm">
        Showing: {firstProductIndex} - {lastProductIndex} of{' '}
        {filteredProducts.length}
      </div>
      <div className="mb-2 text-sm">
        <label htmlFor="sort">
          Sort:{' '}
          <select
            onChange={handleChangeSort}
            className="rounded-lg p-1"
            name="sort"
            id="sort"
            value={sort.mode}
          >
            <option value="featured">Featured</option>
            <option value="priceLow">Price: Low-High</option>
            <option value="priceHigh">Price: High-Low</option>
          </select>
        </label>
        <label className="ml-4" htmlFor="productCount">
          Show:{' '}
          <select
            onChange={handleChangeProductCount}
            className="rounded-lg p-1"
            name="productCount"
            id="productCount"
            value={sort.pageSize}
          >
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="all">All</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default ProductListSort;
