import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '../Shared/Checkbox';

function Sidebar() {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (value === 'exclusive') {
      dispatch({
        type: 'FILTER_TOGGLE_EXLUSIVE',
        item: checked,
      });
    } else if (checked) {
      dispatch({ type: 'FILTER_ADD', item: value });
    } else {
      dispatch({ type: 'FILTER_REMOVE', item: value });
    }
  };

  return (
    <div className="w-full text-lg sm:max-w-[278px] ">
      <h2 className="mb-4 text-3xl font-bold">Filters</h2>
      <div className="flex gap-y-4 gap-x-6 sm:flex-col">
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
            <Checkbox
              name="ipsum"
              id="ipsum"
              text="Ipsum"
              checked={filter.includeCategories.includes('ipsum')}
              handleChange={handleCheckboxChange}
            />
            <Checkbox
              name="dolor"
              id="dolor"
              text="Dolor"
              checked={filter.includeCategories.includes('dolor')}
              handleChange={handleCheckboxChange}
            />
            <Checkbox
              name="amet"
              id="amet"
              text="Amet"
              checked={filter.includeCategories.includes('amet')}
              handleChange={handleCheckboxChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
