import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => `0.5rem ${props.scale * 1}rem`};
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: ${(props) => props.hoverBgColor};
    transition: 0.3s ease-in-out;
  }
`;

function Button({
  label,
  backgroundColor,
  size = 'md',
  handleClick,
  hoverBgColor,
}) {
  let scale = 1;
  if (size === 'sm') scale = 1.5;
  if (size === 'md') scale = 2;
  if (size === 'lg') scale = 3;

  return (
    <ButtonWrapper
      backgroundColor={backgroundColor}
      scale={scale}
      onClick={handleClick}
      hoverBgColor={hoverBgColor}
    >
      {label}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  hoverBgColor: PropTypes.string,
  backgroundColor: PropTypes.oneOf(['#E16036', '#BCAB79', '#FA7E61']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  handleClick: PropTypes.func,
};

export default Button;
