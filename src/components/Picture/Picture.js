import React from 'react';
import PropTypes from 'prop-types';

const Picture = ({ imageName, alt, className }) => {
  const image = require(`../../assets/img/${imageName}`);
  return <img className={className} src={image} alt={alt} />;
};

Picture.defaultProps = {
  alt: ''
};

Picture.propTypes = {
  imageName: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export { Picture as default };
