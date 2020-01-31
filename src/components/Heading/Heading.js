import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ text, className, level }) => {
  const TagName = level;
  return <TagName className={className}>{text}</TagName>;
};

Heading.defaultProps = {
  text: '',
  level: 'h1'
};

Heading.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string.isRequired,
  level: PropTypes.elementType
};

export { Heading as default };
