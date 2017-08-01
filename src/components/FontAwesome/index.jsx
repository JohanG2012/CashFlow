import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const FontAwesome = ({ className, icon }) => (
  <i className={`fa fa-${icon} ${className}`} />
);

FontAwesome.propTypes = propTypes;

export default FontAwesome;
