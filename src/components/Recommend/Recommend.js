import React from 'react';

// COMPONENTS
import Container from '../Container/Container';
import RecommendCount from '../RecommendCount/RecommendCount';
import RecommendFriend from '../RecommendFriend/RecommendFriend';

const Recommend = () => (
  <Container className="recommend">
    <RecommendCount />
    <RecommendFriend />
  </Container>
);

export { Recommend as default };
