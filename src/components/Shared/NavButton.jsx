import { Link } from 'react-router-dom';
import { string } from 'prop-types';

function NavButton({ link, text }) {
  return (
    <Link
      to={link}
      className="inline-block self-center rounded-lg bg-gray-700 px-8 py-4 text-white"
    >
      {text}
    </Link>
  );
}

NavButton.propTypes = {
  link: string.isRequired,
  text: string.isRequired,
};

export default NavButton;
