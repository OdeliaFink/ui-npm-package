import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  border: 1px solid #ccc;
  width: 10rem;
  border-radius: 1rem;
  box-shadow: 4px 10px 1.5rem grey;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    box-shadow: 4px 10px 1rem grey;
    transition: 0.5s;
    cursor: pointer;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 1rem 1rem 0 0;
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const TextContainer = styled.div`
  padding: 0.5rem;
  text-align: center;
`;
const Text = styled.p`
  margin: 0;
  font-size: 0.8rem;
  text-align: left;
  font-family: Helvetica;
  font-weight: 100;
`;

function CouponCard({ title, image }) {
  return (
    <Container>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>

      <TextContainer>
        <Text>{title}</Text>
      </TextContainer>
    </Container>
  );
}

CouponCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default CouponCard;
