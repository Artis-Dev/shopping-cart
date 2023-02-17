import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import useFilterActions from '../../utils/useFilterActions';

function ProductListSectionHeader() {
  const { activeFilters, filteredProducts } = useSelector(
    (state) => state.filter
  );
  const { handleRemoveFilter } = useFilterActions();

  return (
    <div className="mb-6">
      <div className="mb-2 text-sm">Showing: {filteredProducts.length}</div>
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
    </div>
  );
}

export default ProductListSectionHeader;
