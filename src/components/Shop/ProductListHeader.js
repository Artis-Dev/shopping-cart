import ProductListSort from './ProductListSort';
import ProductListActiveFilters from './ProductListActiveFilters';

function ProductListHeader() {
  return (
    <div className="mb-6">
      <ProductListSort />
      <ProductListActiveFilters />
    </div>
  );
}

export default ProductListHeader;
