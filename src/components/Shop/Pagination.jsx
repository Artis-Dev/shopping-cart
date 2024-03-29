import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import usePagination from '../../utils/usePagination';
import useSortActions from '../../utils/sortActions';

function Pagination() {
  const { handleChangePage } = useSortActions();
  const filter = useSelector((state) => state.filter);
  const sort = useSelector((state) => state.sort);
  const totalCount = filter.filteredProducts.length;
  const { currentPage, pageSize } = sort;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  const lastPage = paginationRange[paginationRange.length - 1];

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <div className="mt-6 flex justify-center gap-2">
      <button
        type="button"
        aria-label="Previous page"
        className="disabled:text-gray-500"
        disabled={currentPage === 1 ? true : ''}
        onClick={() => handleChangePage('previous')}
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === 'dots') {
          return (
            <p key={uuidv4()} className="h-8 w-4 text-center">
              ...
            </p>
          );
        }
        return (
          <button
            key={uuidv4()}
            type="button"
            className={`h-8 w-8 rounded-full bg-gray-200 ${
              pageNumber === currentPage ? 'bg-gray-500 text-white' : ''
            }`}
            onClick={() => handleChangePage(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        type="button"
        aria-label="Next page"
        className="disabled:text-gray-500"
        disabled={currentPage === lastPage ? true : ''}
        onClick={() => handleChangePage('next')}
      >
        <FontAwesomeIcon icon={faCaretRight} />
      </button>
    </div>
  );
}

export default Pagination;
