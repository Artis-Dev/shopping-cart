import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFilterActions from '../utils/useFilterActions';
import ProductsSection from '../components/Shop/ProductsSection';
import Sidebar from '../components/Shop/Sidebar';

function Shop() {
  const { processQueryParams, getFilteredProducts } = useFilterActions();
  const { category } = useParams();

  useEffect(() => {
    processQueryParams();
  }, [processQueryParams]);

  useEffect(() => {
    getFilteredProducts(category);
  }, [getFilteredProducts, category]);

  return (
    <div className="m-auto flex max-w-screen-xl flex-col gap-6 p-12 sm:flex-row">
      <Sidebar />
      <ProductsSection />
    </div>
  );
}

export default Shop;
