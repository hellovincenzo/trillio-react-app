import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import SvgIcon from '../SgvIcon/SvgIcon';
import Button from '../Button/Button';

const NavItem = ({ navIcon, textLink, active }) => (
  <li className={`side-nav__item ${active && 'side-nav__item--active'}`}>
    <Button className="side-nav__link">
      <SvgIcon className="side-nav__icon" icon={navIcon} />
      <span>{textLink}</span>
    </Button>
  </li>
);

NavItem.defaultProps = {
  navIcon: '',
  textLink: '',
  active: false
};

NavItem.propTypes = {
  navIcon: PropTypes.string,
  textLink: PropTypes.string,
  active: PropTypes.bool
};

export { NavItem as default };
