import React from 'react';
import PropTypes from 'prop-types';
import FormButton from './FormButton';
import RegularButton from './RegularButton';

const propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func,
  form: PropTypes.bool,
};

const defaultProps = {
  primary: false,
  children: 'submit',
  onClick: (e) => { e.preventDefault(); },
  form: false,
};

const Button = ({ form, children, onClick, primary }) => {
  if (form) {
    return <FormButton primary={primary} type="submit" value={children} />;
  }
  return <RegularButton primary={primary} onClick={onClick}>{children}</RegularButton>;
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
