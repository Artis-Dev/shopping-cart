import { useMemo } from 'react';

const dots = 'dots';

const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => i + start);
};

const calculatePaginationRange = (totalPageCount, currentPage) => {
  const siblingCount = 1;
  const totalPageNumbers = siblingCount + 5;

  if (totalPageNumbers >= totalPageCount) {
    return range(1, totalPageCount);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(
    currentPage + siblingCount,
    totalPageCount,
  );

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPageCount - 1;

  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 4 * siblingCount;
    const leftRange = range(1, leftItemCount);

    return [...leftRange, dots, totalPageCount];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 4 * siblingCount;
    const rightRange = range(
      totalPageCount - rightItemCount + 1,
      totalPageCount,
    );
    return [firstPageIndex, dots, ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, dots, ...middleRange, dots, lastPageIndex];
  }

  return [];
};

const usePagination = ({ totalCount, pageSize, currentPage }) => {
  const totalPageCount = Math.ceil(totalCount / pageSize);

  const paginationRange = useMemo(
    () => calculatePaginationRange(totalPageCount, currentPage),
    [totalPageCount, currentPage],
  );

  return paginationRange;
};

export default usePagination;
