import { func } from 'prop-types';
import MenuButton from './MenuButton';
import Navigation from './Navigation';

function SideNav({ handleShowNav }) {
  return (
    <div className="sidenav fixed left-0 top-0 z-50 h-full w-60 grow overflow-auto bg-gray-100 py-6 px-12">
      <div className="mb-12">
        <MenuButton handleClick={handleShowNav} />
      </div>
      <Navigation />
    </div>
  );
}

SideNav.propTypes = {
  handleShowNav: func.isRequired,
};

export default SideNav;
