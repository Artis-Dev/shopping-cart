import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';

function SidebarToggle() {
  const { showFilter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleToggleFilter = () => {
    dispatch({
      type: 'TOGGLE_FILTER',
    });
  };

  return (
    <button
      className="mb-4 inline-flex shrink self-start rounded-lg bg-gray-200 py-2 px-4"
      type="button"
      onClick={handleToggleFilter}
    >
      {showFilter ? (
        <span>
          Filter{' '}
          <FontAwesomeIcon
            className="text-gray-400"
            icon={faCaretDown}
            fixedWidth
          />
        </span>
      ) : (
        <span>
          Filter{' '}
          <FontAwesomeIcon
            className="text-gray-400"
            icon={faCaretRight}
            fixedWidth
          />
        </span>
      )}
    </button>
  );
}

export default SidebarToggle;
