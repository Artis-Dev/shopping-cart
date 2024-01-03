import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

const useQueryActions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );

  const handleReset = () => {
    dispatch({
      type: 'RESET',
    });
    navigate(location.pathname);
  };

  const processQueryParams = useCallback(() => {
    queryParams.forEach((value, key) => {
      if (value === 'true') {
        dispatch({
          type: 'FILTER_ADD',
          item: key,
        });
      } else if (key === 'sort') {
        dispatch({
          type: 'SORT_CHANGE_MODE',
          item: value,
        });
      } else if (key === 'productCount') {
        dispatch({
          type: 'SORT_CHANGE_PAGE_SIZE',
          item: value === 'all' ? 'all' : Number(value),
        });
      } else if (key === 'page') {
        dispatch({
          type: 'SORT_CHANGE_CURRENT_PAGE',
          item: Number(value),
        });
      }
    });
  }, [dispatch, queryParams]);

  return {
    handleReset,
    processQueryParams,
  };
};

export default useQueryActions;
