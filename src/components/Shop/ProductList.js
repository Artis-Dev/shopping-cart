import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFilterActions from '../../utils/useFilterActions';
import Product from './Product';

function ProductList() {
  const { getFilteredProducts } = useFilterActions();
  const { category } = useParams();
  const { filter } = useSelector((state) => state);

  useEffect(() => {
    getFilteredProducts(category);
  }, [getFilteredProducts, category]);

  return (
    <div className="grid min-w-[278px] grid-cols-[repeat(auto-fit,minmax(278px,1fr))] gap-6">
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
