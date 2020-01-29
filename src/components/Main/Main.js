import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ children }) => <main className="hotel-view">{children}</main>;

Main.propTypes = {
  children: PropTypes.node.isRequired
};

export { Main as default };
