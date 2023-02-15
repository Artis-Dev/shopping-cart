import { string } from 'prop-types';
import { Link } from 'react-router-dom';

function CategoryBox({ text, category }) {
  return (
    <Link
      to={`/shop/${category}`}
      className="flex h-60 w-full grow rounded-lg bg-gray-200 p-6"
    >
      <div className="text-3xl">{text}</div>
    </Link>
  );
}

CategoryBox.propTypes = {
  text: string.isRequired,
  category: string.isRequired,
};

export default CategoryBox;
