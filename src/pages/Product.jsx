import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import prettyPrice from '../utils/prettyPrice';
import PageNotFound from './PageNotFound';
import ProductCartQuantity from '../components/Shop/ProductCartQuantity';
import AddToCartButton from '../components/Shop/AddToCartButton';
import Tabs from '../components/Product/Tabs';

function Product() {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  };

  if (!product) {
    return <PageNotFound />;
  }

  const isInCart = cart.find((item) => item.id === product.id);
  const price = prettyPrice(product.price);

  return (
    <div className="m-auto flex max-w-screen-xl flex-col gap-6 p-6 sm:p-12">
      <div className="w-full rounded-lg bg-gray-100 p-6">
        <button
          className="mb-6 rounded-md
           bg-white px-4 py-2"
          type="button"
          onClick={() => handleNavigateBack()}
        >
          <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
          Go back
        </button>
        <div className="flex flex-col gap-6 sm:flex-row">
          <img
            src={product.image}
            alt={product.name}
            className="h-full min-w-[196px] rounded-xl border sm:w-1/2 sm:max-w-sm"
          />
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-semibold">{product.name}</h2>
              <p className="text-xs">Product number: {product.id}</p>
            </div>
            <h2 className="text-3xl font-semibold">{price}</h2>
            <div className="flex items-center self-start rounded-md border px-4 py-2 align-bottom">
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
      <div className="w-full rounded-lg bg-gray-100">
        <Tabs product={product} />
      </div>
    </div>
  );
}

export default Product;
