import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import useQueryActions from '../../utils/queryActions';

function SidebarCategories() {
  const { categories } = useSelector((state) => state.filter);
  const { handleReset } = useQueryActions();

  return (
    <div className="flex flex-wrap gap-2 sm:flex-col">
      <NavLink
        to="/shop"
        end
        onClick={handleReset}
        className={({ isActive }) =>
          isActive
            ? 'rounded-lg bg-gray-300 px-4 py-2'
            : 'rounded-lg bg-gray-200 px-4 py-2'
        }
      >
        All products
      </NavLink>
      {categories.map((category) => (
        <NavLink
          key={category}
          to={`/shop/${category}`}
          className={({ isActive }) =>
            isActive
              ? 'rounded-lg bg-gray-300 px-4 py-2 sm:pl-8'
              : 'rounded-lg bg-gray-200 px-4 py-2 sm:pl-8'
          }
          onClick={handleReset}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </NavLink>
      ))}
    </div>
  );
}

export default SidebarCategories;
