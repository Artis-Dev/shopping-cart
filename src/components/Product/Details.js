import { shape } from 'prop-types';

function Details({ product }) {
  return (
    <div className="">
      <p className="border-b py-4">
        <span className="font-semibold">Name:</span> {product.name}
      </p>
      <p className="border-b py-4">
        <span className="font-semibold">Product number:</span> {product.id}
      </p>
      <p className="border-b py-4">
        <span className="font-semibold">Category:</span>{' '}
        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
      </p>
      <p className="py-4">
        <span className="font-semibold">Exclusive:</span>{' '}
        {product.exclusive ? 'Yes' : 'No'}
      </p>
    </div>
  );
}

Details.propTypes = {
  product: shape({}).isRequired,
};

export default Details;
