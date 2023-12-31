import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  height: 16rem;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 45%; /* Match the width of the image */
`;

const Description = styled.p`
  font-size: 1.5rem;
  word-wrap: break-word;
`;

export const ImageCard = ({ desc, imageUrl }) => {
  return (
    <>
      <CardContainer>
        <ImageContainer>
          <Image src={imageUrl} />
        </ImageContainer>
        <TextContainer>
          <Description>{desc}</Description>
        </TextContainer>
      </CardContainer>
    </>
  );
};

ImageCard.propTypes = {
  imageUrl: PropTypes.string,
  desc: PropTypes.string,
};
