import { useSelector } from 'react-redux';
import useFilterActions from '../../utils/useFilterActions';

function ProductListSort() {
  const { filter, sort } = useSelector((state) => state);
  const { filteredProducts } = filter;

  const { handleChangeSort } = useFilterActions();

  return (
    <div className="flex items-center justify-between">
      <div className="mb-2 text-sm">Showing: {filteredProducts.length}</div>
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
      </div>
    </div>
  );
}

export default ProductListSort;
