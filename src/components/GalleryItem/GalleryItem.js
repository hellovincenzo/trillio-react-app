import React from 'react';
import PropTypes from 'prop-types';

// COMPONENT
import Container from '../Container/Container';

const GalleryItem = ({ src, alt }) => (
  <Container tag="figure" className="gallery__item">
    <img src={src} alt={alt} className="gallery__photo" />
  </Container>
);

GalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export { GalleryItem as default };
