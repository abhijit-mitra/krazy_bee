import React from 'react';

const Button = ({label, type,...rest}) => (
  <button type="button" className={`btn btn-${type}`}{...rest}>{label}</button>
);

Button.defaultProps={
  'type':'primary'
}

export default Button;
