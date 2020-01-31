import React from 'react';

// COMPONENTS
import Container from '../Container/Container';

const OverviewScore = () => (
  <Container className="overview__score">
    <Container className="overview__score-average">8.6</Container>
    <Container className="overview__score-count">429 votes</Container>
  </Container>
);

export { OverviewScore as default };
