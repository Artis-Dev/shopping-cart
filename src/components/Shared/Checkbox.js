import { string } from 'prop-types';

function Checkbox({ name, id, text }) {
  return (
    <div>
      <label className="flex items-center" htmlFor={id}>
        <input className="mr-1" type="checkbox" name={name} id={id} />
        {text}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  name: string.isRequired,
  id: string.isRequired,
  text: string.isRequired,
};

export default Checkbox;
