import { string } from 'prop-types';

function Description({ description }) {
  return <div className="text-lg">{description}</div>;
}

Description.propTypes = {
  description: string,
};

Description.defaultProps = {
  description: 'This product has no description.',
};

export default Description;
