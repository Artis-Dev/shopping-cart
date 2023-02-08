import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Checkbox from '../Shared/Checkbox';

function Sidebar() {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state);

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const filterLength = Array.from(queryParams).length;

  useEffect(() => {
    queryParams.forEach((value, key) => {
      if (key === 'exclusive') {
        dispatch({
          type: 'FILTER_TOGGLE_EXLUSIVE',
          item: value === 'true',
        });
      } else
        dispatch({
          type: value === 'true' ? 'FILTER_ADD' : 'FILTER_REMOVE',
          item: key,
        });
    });

    return () => {
      dispatch({
        type: 'FILTER_RESET',
      });
    };
  }, [dispatch, queryParams]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      queryParams.set(value, 'true');
    } else {
      queryParams.delete(value);
    }

    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  const handleReset = () => {
    dispatch({
      type: 'FILTER_RESET',
    });
    navigate(location.pathname);
  };

  return (
    <div className="w-full text-lg sm:max-w-[278px] ">
      <h2 className="mb-4 text-4xl font-bold">
        Filters
        {filterLength ? (
          <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-200 align-middle text-base">
            {filterLength}
          </span>
        ) : null}
      </h2>
      <div className="mb-4 flex gap-y-4 gap-x-6 sm:flex-col">
        <div>
          <h3 className="mb-2 text-2xl">Exclusivity</h3>
          <Checkbox
            name="exclusive"
            id="exclusive"
            text="Exclusive"
            checked={filter.includeExclusive}
            handleChange={handleCheckboxChange}
          />
        </div>
        <div>
          <h3 className="mb-2 text-2xl">Categories</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-0 sm:flex-col">
            {filter.categories.map((category) => {
              return (
            <Checkbox
                  key={category}
                  name={category}
                  id={category}
                  text={category.charAt(0).toUpperCase() + category.slice(1)}
                  checked={filter.includeCategories.includes(category)}
              handleChange={handleCheckboxChange}
            />
              );
            })}
          </div>
        </div>
      </div>
      <button
        className="rounded-lg bg-gray-200 py-2 px-4"
        type="button"
        onClick={handleReset}
      >
        Reset filters
      </button>
    </div>
  );
}

export default Sidebar;
