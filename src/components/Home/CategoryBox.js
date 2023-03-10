import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import useQueryActions from '../../utils/queryActions';

function CategoryBox({ text, category }) {
  const { handleReset } = useQueryActions();

  return (
    <Link
      to={`/shop/${category}`}
      className="flex h-60 w-full grow rounded-lg bg-gray-200 p-6"
      onClick={handleReset}
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
