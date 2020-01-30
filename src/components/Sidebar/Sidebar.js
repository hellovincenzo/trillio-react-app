import React from 'react';

// COMPONENTS
import Nav from '../Nav/Nav';
import NavItem from '../NavItem/NavItem';
import Container from '../Container/Container';

const Sidebar = () => {
  const navItems = [
    { navIcon: 'home', textLink: 'Hotel' },
    { navIcon: 'air-craft-take-off', textLink: 'Flight' },
    { navIcon: 'key', textLink: 'Car rental' },
    { navIcon: 'map', textLink: 'Tours' }
  ];

  return (
    <Nav className="sidebar">
      <Container tag="ul" className="side-nav">
        {navItems.map(navItem => (
          <NavItem navIcon={navItem.navIcon} textLink={navItem.textLink} />
        ))}
      </Container>
      <Container className="legal">
        &copy; 2020 by trillio. All right reserved.
      </Container>
    </Nav>
  );
};

export { Sidebar as default };
