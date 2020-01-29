import React from 'react';

// COMPONENTS
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Container from '../Container/Container';
import Main from '../Main/Main';

const App = () => (
  <Container className="container">
    <Header />
    <Container className="content">
      <Nav />
      <Main />
    </Container>
  </Container>
);

export { App as default };
