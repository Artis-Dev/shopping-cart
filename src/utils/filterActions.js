import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import useSortActions from './sortActions';

const useFilterActions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, filter, sort } = useSelector((state) => state);
  const location = useLocation();
  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );
  const { sortProducts } = useSortActions();

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
    queryParams.delete('page');

    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  const handleFilterRemove = (filterItem) => {
    dispatch({
      type: 'FILTER_REMOVE',
      item: filterItem,
    });
    queryParams.delete(filterItem);
    queryParams.delete('page');
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  const handleFilterReset = () => {
    dispatch({
      type: 'FILTER_RESET',
    });

    const queryParamsToKeep = ['productCount', 'sort'];

    Array.from(queryParams.keys()).forEach((key) => {
      if (!queryParamsToKeep.includes(key)) {
        queryParams.delete(key);
      }
    });

    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  const getFilteredProducts = useCallback(
    (category) => {
      const includeExclusive = filter.activeFilters.includes('exclusive');
      const includeNew = filter.activeFilters.includes('new');
      const isSelectedCategory = (product) => product.category === category;

      const filterFunctions = [
        (product) => !includeExclusive || product.exclusive,
        (product) => !includeNew || product.new,
        (product) => !category || isSelectedCategory(product),
      ];

      const sortedArray = sortProducts(products, sort.mode);

      const filteredArray = sortedArray.filter((product) =>
        filterFunctions.every((filterFunction) => filterFunction(product)),
      );

      // const sortedArray = sortProducts(filteredArray, sort.mode);

      dispatch({
        type: 'FILTER_UPDATE_PRODUCTS',
        item: filteredArray,
      });

      return filteredArray;
    },
    [dispatch, filter.activeFilters, products, sort.mode, sortProducts],
  );

  return {
    handleFilterChange,
    handleFilterRemove,
    handleFilterReset,
    getFilteredProducts,
  };
};

export default useFilterActions;
