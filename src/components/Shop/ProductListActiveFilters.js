import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import useFilterActions from '../../utils/useFilterActions';

function ProductListActiveFilters() {
  const { activeFilters } = useSelector((state) => state.filter);
  const { handleFilterRemove } = useFilterActions();

  return (
    <div>
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span>Filters:</span>
          {activeFilters.map((activeFilter) => {
            return (
              <span
                key={activeFilter}
                className="rounded-lg bg-gray-200 py-1 px-2"
              >
                <span>{activeFilter}</span>
                <button
                  type="button"
                  onClick={() => handleFilterRemove(activeFilter)}
                  className="ml-1 inline-flex h-3 w-3"
                >
                  <FontAwesomeIcon icon={faRemove} size="xs" />
                </button>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProductListActiveFilters;
