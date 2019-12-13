import React from 'react';

const MenuItem = ({label, ...rest}) => (
  <button className="dropdown-item" type="button" {...rest}>{label}</button>
);

export default MenuItem;
