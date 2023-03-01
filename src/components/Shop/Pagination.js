import { useSelector } from 'react-redux';
import uniqId from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import usePagination from '../../utils/usePagination';
import useSortActions from '../../utils/sortActions';

function Pagination() {
  const { handleChangePage } = useSortActions();
  const { filter, sort } = useSelector((state) => state);

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
        className="disabled:text-gray-500"
        disabled={currentPage === 1 ? true : ''}
        onClick={() => handleChangePage('previous')}
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === 'dots') {
          return (
            <p key={uniqId()} className="h-8 w-4 text-center">
              ...
            </p>
          );
        }
        return (
          <button
            key={uniqId()}
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
