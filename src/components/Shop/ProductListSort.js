import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useFilterActions from '../../utils/useFilterActions';

function ProductListSort() {
  const { filteredProducts, sort } = useSelector((state) => state.filter);

  const { handleChangeSort } = useFilterActions();

  useEffect(() => {
    console.log(sort);
  }, [sort]);

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
            value={sort}
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
