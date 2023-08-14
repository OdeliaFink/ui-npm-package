import PropTypes from 'prop-types';

function Button({ label, backgroundColor = 'red', size = 'md', handleClick }) {
  let scale = 1;
  if (size === 'sm') scale = 1.5;
  if (size === 'md') scale = 2;
  if (size === 'lg') scale = 3;
  const style = {
    backgroundColor,
    padding: `0.5rem ${scale * 1}rem`,
    border: 'none',
    borderRadius: '2rem',
  };
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  handleClick: PropTypes.func,
};

export default Button;
