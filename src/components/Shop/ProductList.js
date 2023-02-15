import { useSelector } from 'react-redux';
import Product from './Product';

function ProductList() {
  const { filter } = useSelector((state) => state);

  return (
    <div className="grid grid-cols-[repeat(2,minmax(150px,1fr))] gap-3 sm:grid-cols-[repeat(auto-fit,minmax(278px,1fr))] sm:gap-6">
      {filter.filteredProducts.length > 0 ? (
        filter.filteredProducts.map((product) => {
          return <Product key={product.id} product={product} />;
        })
      ) : (
        <p>no products</p>
      )}
    </div>
  );
}

export default ProductList;
