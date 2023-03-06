import { string } from 'prop-types';

function Description({ description }) {
  return <div className="p-6 text-lg">{description}</div>;
}

Description.propTypes = {
  description: string,
};

Description.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae exercitationem dignissimos sapiente eius tempore placeat aperiam tenetur est perferendis reprehenderit maiores, ab vero debitis numquam a soluta. Distinctio, vero eum!',
};

export default Description;
