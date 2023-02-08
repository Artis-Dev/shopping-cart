import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

function ProductsSectionHeader() {
  const { filter } = useSelector((state) => state);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  const allFilters = filter.includeExclusive
    ? ['exclusive', ...filter.includeCategories]
    : filter.includeCategories;

  const handleRemoveFilter = (filterItem) => {
    queryParams.delete(filterItem);

    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  return (
    <>
      <div className="mb-2 text-sm">Showing: todo</div>
      {allFilters.length > 0 && (
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span>Filters:</span>
          {allFilters.map((activeFilter) => {
            return (
              <span
                key={activeFilter}
                className="rounded-lg bg-gray-200 py-1 px-2"
              >
                <span>{activeFilter}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveFilter(activeFilter)}
                  className="ml-1 inline-flex h-3 w-3"
                >
                  <FontAwesomeIcon icon={faRemove} size="xs" />
                </button>
              </span>
            );
          })}
        </div>
      )}
    </>
  );
}

export default ProductsSectionHeader;
