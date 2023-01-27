import products from '../../utils/products';
import Product from './Product';

function ProductList() {
  return (
    <div className="grow">
      <div className="grid min-w-[278px] grid-cols-[repeat(auto-fit,minmax(278px,1fr))] gap-6">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;
