import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCounter from '../components/Shared/ProductCounter';
import prettyPrice from '../utils/prettyPrice';
import PageNotFound from './PageNotFound';

function ProductPage() {
  const { products } = useSelector((state) => state);
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <PageNotFound />;
  }

  return (
    <div className="m-auto flex max-w-screen-xl gap-6 p-6 sm:p-12">
      <div className="w-full rounded-lg bg-gray-100 p-6">
        <div className="flex gap-6">
          <img src={product.image} alt={product.name} className="h-96" />
          <div>
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-xs">ID: {product.id}</p>
            <h2 className="text-2xl font-semibold">
              {prettyPrice(product.price)}
            </h2>
            <ProductCounter product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
