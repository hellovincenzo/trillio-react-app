import React from 'react';

// COMPONENTS
import Container from '../Container/Container';
import SgvIcon from '../SgvIcon/SvgIcon';
import Button from '../Button/Button';

const OverviewLocation = () => (
  <Container className="overview__location">
    <SgvIcon className="overview__icon-location" icon="location-pin" />
    <Button className="btn-inline">Albufeira, Portugal</Button>
  </Container>
);

export { OverviewLocation as default };
