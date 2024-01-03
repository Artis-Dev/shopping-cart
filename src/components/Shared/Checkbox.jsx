import { string, func, bool } from 'prop-types';

function Checkbox({ name, id, text, handleChange, checked }) {
  return (
    <div>
      <label className="flex items-center" htmlFor={id}>
        <input
          className="mr-1"
          type="checkbox"
          name={name}
          id={id}
          value={name}
          checked={checked}
          onChange={handleChange}
        />
        {text}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  name: string.isRequired,
  id: string.isRequired,
  text: string.isRequired,
  handleChange: func,
  checked: bool,
};

Checkbox.defaultProps = {
  handleChange: null,
  checked: null,
};

export default Checkbox;
