import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFilterActions from '../../utils/filterActions';
import useMediaQuery from '../../utils/useMediaQuery';
import Checkbox from '../Shared/Checkbox';
import SidebarCategories from './SidebarCategories';
import SidebarToggle from './SidebarToggle';

function Sidebar() {
  const { activeFilters } = useSelector((state) => state.filter);
  const { showFilter } = useSelector((state) => state.ui);
  const { handleFilterReset, handleFilterChange } = useFilterActions();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 639px)');

  const disableNav = useCallback(() => {
    dispatch({ type: 'UI_DISABLE_FILTER' });
  }, [dispatch]);

  useEffect(() => {
    if (!isMobile) {
      disableNav();
    }
  }, [isMobile, disableNav]);

  return (
    <div className="w-full text-lg sm:max-w-[278px] ">
      {isMobile ? <SidebarToggle /> : null}
      {(isMobile && showFilter) || !isMobile ? (
        <>
          <div className="my-4 flex flex-col gap-x-6 gap-y-4 sm:mt-0">
            <div>
              <h3 className="mb-4 text-2xl">Categories</h3>
              <SidebarCategories />
            </div>
            <div>
              <h3 className="mb-2 text-2xl">Filter</h3>
              <div className="flex gap-4 sm:flex-col sm:gap-0">
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
          </div>
          {activeFilters.length !== 0 ? (
            <button
              className="rounded-lg bg-gray-200 px-4 py-2"
              type="button"
              onClick={handleFilterReset}
            >
              Reset filter
            </button>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

export default Sidebar;
