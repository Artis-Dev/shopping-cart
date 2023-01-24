import { bool, func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

function MenuButton(props) {
  const { handleClick, showNav } = props;

  return (
    <button type="button" onClick={handleClick} className="h-8 w-8">
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
  showNav: bool,
};

MenuButton.defaultProps = {
  showNav: false,
};

export default MenuButton;
