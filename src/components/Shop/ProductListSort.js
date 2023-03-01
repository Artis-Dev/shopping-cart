import ProductListInfo from './ProductListInfo';
import ProductListSettings from './ProductListSettings';

function ProductListSort() {
  return (
    <div className="flex flex-wrap items-center justify-between">
      <ProductListInfo />
      <ProductListSettings />
    </div>
  );
}

export default ProductListSort;
