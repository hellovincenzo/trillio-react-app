import React from 'react';

// COMPONENTS
import Container from '../Container/Container';
import Picture from '../Picture/Picture';

const Review = () => (
  <Container tag="figure" className="review">
    <Container tag="blockquote" className="review__text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque
      architecto dicta animi, totam, itaque officia ex.
    </Container>
    <Container tag="figcaption" className="review__user">
      <Picture imageName="user-1.jpg" alt="User 1" className="review__photo" />
      <Container className="review__user-box">
        <Container tag="p" className="review__user-name">
          Nick Smith
        </Container>
        <Container tag="p" className="review__user-date">
          Feb 23rd, 2017
        </Container>
      </Container>
      <Container className="review__rating">7.8</Container>
    </Container>
  </Container>
);

export { Review as default };
