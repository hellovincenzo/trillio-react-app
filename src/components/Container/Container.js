import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className, tag }) => {
  const TagName = tag;
  return <TagName className={className}>{children}</TagName>;
};

Container.defaultProps = {
  tag: 'div'
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  tag: PropTypes.elementType
};

export { Container as default };
