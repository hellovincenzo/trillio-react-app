import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ children }) => <nav className="sidebar">{children}</nav>;

Nav.propTypes = {
  children: PropTypes.node.isRequired
};

export { Nav as default };
