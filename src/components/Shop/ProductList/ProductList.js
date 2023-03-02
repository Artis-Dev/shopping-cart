import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';
import ProductListNotFound from './ProductListNotFound';

function ProductList() {
  const { filter, sort } = useSelector((state) => state);

  const currentFilteredProducts = useMemo(() => {
    if (sort.pageSize === 'all') {
      return filter.filteredProducts;
    }
    const firstPageIndex = (sort.currentPage - 1) * sort.pageSize;
    const lastPageIndex = firstPageIndex + sort.pageSize;
    return filter.filteredProducts.slice(firstPageIndex, lastPageIndex);
  }, [sort.currentPage, sort.pageSize, filter.filteredProducts]);

  return (
    <div className="grid grid-cols-[repeat(2,minmax(150px,1fr))] gap-3 sm:grid-cols-[repeat(auto-fit,minmax(278px,1fr))] sm:gap-6">
      {filter.filteredProducts.length > 0 ? (
        <>
          {currentFilteredProducts.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </>
      ) : (
        <ProductListNotFound />
      )}
    </div>
  );
}

export default ProductList;
