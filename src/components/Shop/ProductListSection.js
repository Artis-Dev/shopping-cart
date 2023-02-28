import ProductList from './ProductList';
import ProductListSectionHeader from './ProductListHeader';
import Pagination from './Pagination';

function ProductListSection() {
  return (
    <div className="grow">
      <ProductListSectionHeader />
      <ProductList />
      <Pagination />
    </div>
  );
}

export default ProductListSection;
