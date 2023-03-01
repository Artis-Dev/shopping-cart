import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useFilterActions from '../utils/filterActions';
import useQueryActions from '../utils/queryActions';
import ProductListSection from '../components/Shop/ProductListSection';
import Sidebar from '../components/Shop/Sidebar';
import PageNotFound from './PageNotFound';

function Shop() {
  const { categories } = useSelector((state) => state.filter);
  const { getFilteredProducts } = useFilterActions();
  const { processQueryParams } = useQueryActions();
  const { category } = useParams();
  const isValidCategory = categories.includes(category);

  useEffect(() => {
    processQueryParams();
  }, [processQueryParams]);

  useEffect(() => {
    getFilteredProducts(category);
  }, [getFilteredProducts, category]);

  return (
    <div>
      {category && !isValidCategory ? (
        <PageNotFound />
      ) : (
        <div className="m-auto flex max-w-screen-xl flex-col gap-6 p-6 sm:flex-row sm:p-12">
          <Sidebar />
          <ProductListSection />
        </div>
      )}
    </div>
  );
}

export default Shop;
