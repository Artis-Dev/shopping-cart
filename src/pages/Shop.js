import ProductList from '../components/Shop/ProductList';
import Sidebar from '../components/Shop/Sidebar';

function Shop() {
  return (
    <div className="m-auto flex max-w-screen-xl flex-col gap-6 p-12 sm:flex-row">
      <Sidebar />
      <ProductList />
    </div>
  );
}

export default Shop;
