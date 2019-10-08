import React from 'react';
import { NavLink } from 'react-router-dom';

const Clickable = ({
  children,
  to,
}) => (
  <NavLink className="crazy-link" exact to={to}>
    { children }
  </NavLink>
);

export default Clickable;
