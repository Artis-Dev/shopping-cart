import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
