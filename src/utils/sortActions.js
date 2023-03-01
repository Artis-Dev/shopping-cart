import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

const useSortActions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sort } = useSelector((state) => state);
  const location = useLocation();
  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  const handleChangeSort = (event) => {
    const { value } = event.target;
    dispatch({ type: 'SORT_CHANGE_MODE', item: value });

    if (value !== 'featured') {
      queryParams.set('sort', value);
    } else {
      queryParams.delete('sort');
    }
    queryParams.delete('page');

    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  const handleChangeProductCount = (event) => {
    const { value } = event.target;
    dispatch({
      type: 'SORT_CHANGE_PAGE_SIZE',
      item: value === 'all' ? 'all' : Number(value),
    });

    if (value !== 6) {
      queryParams.set('productCount', value);
    } else {
      queryParams.delete('productCount');
    }
    queryParams.delete('page');

    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  const handleChangePage = (action) => {
    let newPage = sort.currentPage;

    if (action === 'previous') {
      newPage -= 1;
    } else if (action === 'next') {
      newPage += 1;
    } else if (Number.isInteger(action)) {
      newPage = action;
    }

    dispatch({ type: 'SORT_CHANGE_CURRENT_PAGE', item: newPage });

    if (newPage !== 1) {
      queryParams.set('page', newPage);
    } else {
      queryParams.delete('page');
    }

    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  const sortProducts = useCallback((products, sortMode) => {
    const sortedArray = [...products];
    if (sortMode === 'priceLow') {
      sortedArray.sort((a, b) => a.price - b.price);
    } else if (sortMode === 'priceHigh') {
      sortedArray.sort((a, b) => b.price - a.price);
    }
    return sortedArray;
  }, []);

  return {
    handleChangeSort,
    handleChangeProductCount,
    handleChangePage,
    sortProducts,
  };
};

export default useSortActions;
