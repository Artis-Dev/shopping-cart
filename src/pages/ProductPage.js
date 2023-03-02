import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
        <div className="text-center">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
