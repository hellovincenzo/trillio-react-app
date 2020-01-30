import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className }) => (
  <button type="button" className={className}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
};

export { Button as default };
