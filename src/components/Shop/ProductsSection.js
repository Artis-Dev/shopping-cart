import ProductList from './ProductList';
import ProductsSectionHeader from './ProductsSectionHeader';

function ProductsSection() {
  return (
    <div className="grow">
      <ProductsSectionHeader />
      <ProductList />
    </div>
  );
}

export default ProductsSection;
