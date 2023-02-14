import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

const useFilterActions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, filter } = useSelector((state) => state);
  const location = useLocation();
  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  const handleReset = () => {
    dispatch({
      type: 'FILTER_RESET',
    });
    navigate(location.pathname);
  };

  const handleFilterChange = (event) => {
    const { value, checked } = event.target;

    dispatch({
      type: checked ? 'FILTER_ADD' : 'FILTER_REMOVE',
      item: value,
    });

    if (checked) {
      queryParams.set(value, 'true');
    } else {
      queryParams.delete(value);
    }
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  const processQueryParams = useCallback(() => {
    queryParams.forEach((value, key) => {
      if (value === 'true') {
        dispatch({
          type: 'FILTER_ADD',
          item: key,
        });
      }
    });
  }, [dispatch, queryParams]);

  const handleRemoveFilter = (filterItem) => {
    dispatch({
      type: 'FILTER_REMOVE',
      item: filterItem,
    });
    queryParams.delete(filterItem);
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  const getFilteredProducts = useCallback(
    (category) => {
      const includeExclusive = filter.activeFilters.includes('exclusive');
      const isSelectedCategory = (product) => product.category === category;

      const filteredArray = products.filter((product) => {
        if (includeExclusive && category) {
          return product.exclusive && isSelectedCategory(product);
        }
        if (includeExclusive) {
          return product.exclusive;
        }
        if (category) {
          return isSelectedCategory(product);
        }
        return true;
      });

      dispatch({
        type: 'FILTER_UPDATE_PRODUCTS',
        item: filteredArray,
      });

      return filteredArray;
    },
    [dispatch, filter.activeFilters, products]
  );

  return {
    handleReset,
    handleFilterChange,
    processQueryParams,
    handleRemoveFilter,
    getFilteredProducts,
  };
};

export default useFilterActions;
