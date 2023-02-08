import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';

function ProductList() {
  const { products, filter } = useSelector((state) => state);

  const filteredProducts = useMemo(() => {
    if (
      filter.includeCategories.length === 0 &&
      filter.includeExclusive === false
    ) {
      return products;
    }
    return products.filter((product) => {
      const isExclusive = product.exclusive;
      const isSelectedCategory = filter.includeCategories.includes(
        product.category
      );
      return (filter.includeExclusive && isExclusive) || isSelectedCategory;
    });
  }, [filter, products]);

  return (
    <div className="grid min-w-[278px] grid-cols-[repeat(auto-fit,minmax(278px,1fr))] gap-6">
      {filteredProducts.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductList;
