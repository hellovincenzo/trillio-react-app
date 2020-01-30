import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ children }) => (
  <form action="#" className="search">
    {children}
  </form>
);

Form.propTypes = {
  children: PropTypes.node.isRequired
};

export { Form as default };
