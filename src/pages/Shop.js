import { useEffect } from 'react';
import useFilterActions from '../utils/useFilterActions';
import ProductsSection from '../components/Shop/ProductsSection';
import Sidebar from '../components/Shop/Sidebar';

function Shop() {
  const { processQueryParams } = useFilterActions();

  useEffect(() => {
    processQueryParams();
  }, [processQueryParams]);

  return (
    <div className="m-auto flex max-w-screen-xl flex-col gap-6 p-12 sm:flex-row">
      <Sidebar />
      <ProductsSection />
    </div>
  );
}

export default Shop;
