import React from 'react';

// COMPONENTS
import Container from '../Container/Container';
import Description from '../Description/Description';
import UserReview from '../UserReview/UserReview';

const Detail = () => (
  <Container className="detail">
    <Description />
    <UserReview />
  </Container>
);

export { Detail as default };
