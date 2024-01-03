import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';

function SidebarToggle() {
  const { showFilter } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleToggleFilter = () => {
    dispatch({
      type: 'UI_TOGGLE_FILTER',
    });
  };

  return (
    <button
      className="inline-flex shrink self-start rounded-lg bg-gray-200 px-4 py-2"
      type="button"
      onClick={handleToggleFilter}
    >
      <span>
        Filter
        <FontAwesomeIcon
          className="ml-1 text-gray-400"
          icon={showFilter ? faCaretDown : faCaretRight}
          fixedWidth
        />
      </span>
    </button>
  );
}

export default SidebarToggle;
