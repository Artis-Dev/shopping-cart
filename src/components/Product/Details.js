import { shape } from 'prop-types';

function Details({ product }) {
  return <div className="p-6">{product.name}</div>;
}

Details.propTypes = {
  product: shape({}).isRequired,
};

export default Details;
