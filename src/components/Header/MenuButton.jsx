import { func } from 'prop-types';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

function MenuButton({ handleClick }) {
  const { showNav } = useSelector((state) => state.ui);

  return (
    <button type="button" onClick={handleClick} className="sidenav h-8 w-8">
      {showNav ? (
        <FontAwesomeIcon icon={faClose} size="xl" className="self-center" />
      ) : (
        <FontAwesomeIcon icon={faBars} size="xl" className="self-center" />
      )}
    </button>
  );
}

MenuButton.propTypes = {
  handleClick: func.isRequired,
};

export default MenuButton;
