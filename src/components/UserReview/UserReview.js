import React from 'react';

// COMPONENTS
import Container from '../Container/Container';
import Review from '../Review/Review';

const UserReview = () => (
  <Container className="user-reviews">
    <Review />
  </Container>
);

export { UserReview as default };
