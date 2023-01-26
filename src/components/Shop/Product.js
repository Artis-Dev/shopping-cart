import { number, shape, string } from 'prop-types';

function Product(props) {
  const { product } = props;

  return (
    <div className="h-auto min-w-[278px] max-w-full rounded-lg border border-gray-200">
      <img src={product.image} alt="" className="m-auto" />
      <div className="bg-gray-200 p-3">
        <h3 className="text-xl">{product.name}</h3>
        <h4>{product.price}</h4>
        <button type="button" className="rounded-lg bg-white py-2 px-4">
          Add to cart
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: shape({
    id: string.isRequired,
    image: string.isRequired,
    name: string.isRequired,
    price: number.isRequired,
  }).isRequired,
};

export default Product;
