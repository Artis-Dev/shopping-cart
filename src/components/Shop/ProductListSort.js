import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ProductListSort() {
  const dispatch = useDispatch();
  const { filteredProducts, sort } = useSelector((state) => state.filter);

  const handleChangeSort = (event) => {
    const { value } = event.target;
    dispatch({ type: 'FILTER_CHANGE_SORT', item: value });
  };

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
