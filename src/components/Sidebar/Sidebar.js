import React from 'react';

// COMPONENTS
import Nav from '../Nav/Nav';
import NavItem from '../NavItem/NavItem';
import Container from '../Container/Container';

const Sidebar = () => {
  const navItems = [
    { navIcon: 'home', textLink: 'Hotel', active: true },
    { navIcon: 'aircraft-take-off', textLink: 'Flight', active: false },
    { navIcon: 'key', textLink: 'Car rental', active: false },
    { navIcon: 'map', textLink: 'Tours', active: false }
  ];

  return (
    <Nav className="sidebar">
      <Container tag="ul" className="side-nav">
        {navItems.map(navItem => (
          <NavItem
            key={navItem.navIcon}
            navIcon={navItem.navIcon}
            textLink={navItem.textLink}
            active={navItem.active}
          />
        ))}
      </Container>
      <Container className="legal">
        &copy; 2020 by trillio. All right reserved.
      </Container>
    </Nav>
  );
};

export { Sidebar as default };
