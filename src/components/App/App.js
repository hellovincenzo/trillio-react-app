import React from 'react';

// COMPONENTS
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Container from '../Container/Container';
import Main from '../Main/Main';

const App = () => (
  <Container className="container">
    <Header />
    <Container className="content">
      <Sidebar />
      <Main />
    </Container>
  </Container>
);

export { App as default };
