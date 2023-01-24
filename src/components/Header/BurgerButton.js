import { func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function BurgerButton(props) {
  const { handleClick } = props;

  return (
    <button type="button" onClick={handleClick}>
      <FontAwesomeIcon icon={faBars} size="xl" />
    </button>
  );
}

BurgerButton.propTypes = {
  handleClick: func.isRequired,
};

export default BurgerButton;
