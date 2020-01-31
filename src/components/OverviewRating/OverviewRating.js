import React from 'react';

// COMPONENTS
import Container from '../Container/Container';
import SvgIcon from '../SgvIcon/SvgIcon';

const OverviewRating = () => (
  <Container className="overview__rating">
    <Container className="overview__stars">
      <SvgIcon className="overview__icon-star" icon="star" />
    </Container>
  </Container>
);

export { OverviewRating as default };
