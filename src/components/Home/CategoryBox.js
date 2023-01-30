import { string } from 'prop-types';
import { Link } from 'react-router-dom';

function CategoryBox({ text, link }) {
  return (
    <Link
      to={link}
      className="flex h-64 w-full grow rounded-lg bg-gray-200 p-6"
    >
      <div className="text-3xl">{text}</div>
    </Link>
  );
}

CategoryBox.propTypes = {
  text: string.isRequired,
  link: string.isRequired,
};

export default CategoryBox;
