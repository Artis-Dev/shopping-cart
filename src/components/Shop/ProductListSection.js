import ProductList from './ProductList';
import ProductListSectionHeader from './ProductListSectionHeader';

function ProductListSection() {
  return (
    <div className="grow">
      <ProductListSectionHeader />
      <ProductList />
    </div>
  );
}

export default ProductListSection;
