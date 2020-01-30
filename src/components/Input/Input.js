import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, className }) => (
  <input type={type} className={className} placeholder={placeholder} />
);

Input.defaultProps = {
  type: 'text',
  placeholder: ''
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string.isRequired
};

export { Input as default };
