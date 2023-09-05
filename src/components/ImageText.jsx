import React from 'react';
import PropTypes from 'prop-types';

const ImageText = ({ desc, imageUrl }) => {
  return (
    <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
      <div
        style={{
          border: '1px solid black',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <img src={imageUrl} style={{ width: '50%', display: 'block' }} />
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

ImageText.propTypes = {
  desc: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default ImageText;
