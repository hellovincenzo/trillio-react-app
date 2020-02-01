import React from 'react';

// COMPONENTS
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';

const Cta = () => (
  <Container className="cta">
    <Heading
      level="h2"
      className="cta__book-now"
      text="Good news! We have 4 rooms for your selected dates!"
    />
    <Button className="btn">
      <span className="btn__visible">Book now</span>
      <span className="btn__invisible">Only 4 rooms left</span>
    </Button>
  </Container>
);

export { Cta as default };
