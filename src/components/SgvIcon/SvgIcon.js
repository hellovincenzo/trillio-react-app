import React from 'react';
import PropTypes from 'prop-types';

// SPRITE FOR SVG
import Sprite from '../../assets/img/sprite.svg';

const SvgIcon = ({ icon, className }) => (
  <svg className={className}>
    <use xlinkHref={`${Sprite}#icon-${icon}`} />
  </svg>
);

SvgIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export { SvgIcon as default };
