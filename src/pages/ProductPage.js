import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import prettyPrice from '../utils/prettyPrice';
import PageNotFound from './PageNotFound';
import ProductCartQuantity from '../components/Shop/Product/ProductCartQuantity';
import AddToCartButton from '../components/Shop/Product/AddToCartButton';

function ProductPage() {
  const { products, cart } = useSelector((state) => state);
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <PageNotFound />;
  }

  const isInCart = cart.find((item) => item.id === product.id);

  return (
    <div className="m-auto flex max-w-screen-xl flex-col gap-6 p-6 sm:p-12">
      <div className="w-full rounded-lg bg-gray-100 p-6">
        <div className="flex flex-col gap-6 sm:flex-row">
          <img
            src={product.image}
            alt={product.name}
            className="h-full min-w-[196px] rounded-xl border sm:w-1/2 sm:max-w-sm"
          />
          <div>
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-xs">ID: {product.id}</p>
            <h2 className="text-2xl font-semibold">
              {prettyPrice(product.price)}
            </h2>
            <div className="inline-flex items-center rounded-md border py-2 px-4">
              <p className="mr-6 font-semibold">In cart:</p>
              <div className="w-36">
                {isInCart ? (
                  <ProductCartQuantity product={product} />
                ) : (
                  <AddToCartButton product={product} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
