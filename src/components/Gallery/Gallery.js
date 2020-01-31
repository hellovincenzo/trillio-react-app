import React from 'react';

// COMPONENT
import Container from '../Container/Container';
import GalleryItem from '../GalleryItem/GalleryItem';

// IMG
import Hotel1 from '../../assets/img/hotel-1.jpg';
import Hotel2 from '../../assets/img/hotel-2.jpg';
import Hotel3 from '../../assets/img/hotel-3.jpg';

const Gallery = () => {
  const GALLERY_DATA = [
    { src: Hotel1, alt: 'Photo of hotel 1' },
    { src: Hotel2, alt: 'Photo of hotel 2' },
    { src: Hotel3, alt: 'Photo of hotel 3' }
  ];
  return (
    <Container className="gallery">
      {GALLERY_DATA.map((gallery, i) => (
        <GalleryItem key={i.toString()} src={gallery.src} alt={gallery.alt} />
      ))}
    </Container>
  );
};

export { Gallery as default };
