import React from 'react';
import PropTypes from 'prop-types';

const DescriptionList = ({ text }) => <li className="list__item">{text}</li>;

DescriptionList.defaultProps = {
  text: ''
};

DescriptionList.propTypes = {
  text: PropTypes.string
};

export { DescriptionList as default };
