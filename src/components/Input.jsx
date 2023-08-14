import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const sizeScale = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
};

const SearchBar = styled.input`
  width: ${(props) => props.size};
  padding: ${(props) => `.9rem ${props.scale * 2}rem`};
  border: 3px solid #ccc;
  border-radius: 2rem;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  font-weight: ${(props) => props.fontType};

  &:focus {
    border: 3px solid ${(props) => props.inFocusBorderColor};
  }
`;

export const Input = ({
  label = 'search',
  size = 'md',
  inFocusBorderColor,
  fontType,
}) => {
  const scale = sizeScale[size] || 2;

  return (
    <>
      <div style={{ width: '100%' }}>
        <SearchBar
          type="text"
          size={size}
          placeholder={label}
          scale={scale}
          inFocusBorderColor={inFocusBorderColor}
          autoComplete
          fontType={fontType}
        />
      </div>
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  fontType: PropTypes.oneOf(['regular', 'bold']),
  inFocusBorderColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
};
