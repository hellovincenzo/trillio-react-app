import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import SvgIcon from '../SgvIcon/SvgIcon';
import Button from '../Button/Button';

const NavItem = ({ navIcon, textLink }) => (
  <li className="side-nav__item">
    <Button className="side-nav__link">
      <SvgIcon icon={navIcon} />
      <span>{textLink}</span>
    </Button>
  </li>
);

NavItem.defaultProps = {
  navIcon: '',
  textLink: ''
};

NavItem.propTypes = {
  navIcon: PropTypes.string,
  textLink: PropTypes.string
};

export { NavItem as default };
