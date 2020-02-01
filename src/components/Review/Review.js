import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import Container from '../Container/Container';
import Picture from '../Picture/Picture';

const Review = ({ text, photo, name, date, rating }) => (
  <Container tag="figure" className="review">
    <Container tag="blockquote" className="review__text">
      {text}
    </Container>
    <Container tag="figcaption" className="review__user">
      <Picture imageName={photo} alt="User 1" className="review__photo" />
      <Container className="review__user-box">
        <Container tag="p" className="review__user-name">
          {name}
        </Container>
        <Container tag="p" className="review__user-date">
          {date}
        </Container>
      </Container>
      <Container className="review__rating">{rating}</Container>
    </Container>
  </Container>
);

Review.propTypes = {
  text: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
};

export { Review as default };
