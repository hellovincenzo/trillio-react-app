import React from 'react';

// COMPONENTS
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import OverviewRating from '../OverviewRating/OverviewRating';
import OverviewLocation from '../OverviewLocation/OverviewLocation';
import OverviewScore from '../OverviewScore/OverviewScore';

const Overview = () => (
  <Container className="overview">
    <Heading className="overview__heading" text="Hotel Las Palmas" />
    <OverviewRating />
    <OverviewLocation />
    <OverviewScore />
  </Container>
);

export { Overview as default };
