import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import useFilterActions from '../../utils/useFilterActions';
import Checkbox from '../Shared/Checkbox';

function Sidebar() {
  const { activeFilters, categories } = useSelector((state) => state.filter);
  const { handleReset, handleFilterChange } = useFilterActions();

  return (
    <div className="w-full text-lg sm:max-w-[278px] ">
      <div className="mb-4 flex flex-col gap-y-4 gap-x-6">
        <div>
          <h3 className="mb-4 text-2xl">Categories</h3>
          <div className="flex flex-wrap gap-2 sm:flex-col">
            <NavLink
              to="/shop"
              end
              onClick={handleReset}
              className={({ isActive }) =>
                isActive
                  ? 'rounded-lg bg-gray-300 py-2 px-4'
                  : 'rounded-lg bg-gray-200 py-2 px-4'
              }
            >
              All products
            </NavLink>
            {categories.map((category) => {
              return (
                <NavLink
                  key={category}
                  to={`/shop/${category}`}
                  className={({ isActive }) =>
                    isActive
                      ? 'rounded-lg bg-gray-300 py-2 px-4 sm:pl-8'
                      : 'rounded-lg bg-gray-200 py-2 px-4 sm:pl-8'
                  }
                  onClick={handleReset}
                >
                  {category}
                </NavLink>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-2xl">Filter</h3>
          <Checkbox
            name="exclusive"
            id="exclusive"
            text="Exclusive"
            checked={activeFilters.includes('exclusive')}
            handleChange={handleFilterChange}
          />
          <Checkbox
            name="new"
            id="new"
            text="New"
            checked={activeFilters.includes('new')}
            handleChange={handleFilterChange}
          />
        </div>
      </div>
      <button
        className="rounded-lg bg-gray-200 py-2 px-4"
        type="button"
        onClick={handleReset}
      >
        Reset filter
      </button>
    </div>
  );
}

export default Sidebar;
