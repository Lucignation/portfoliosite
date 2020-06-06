import React from 'react';
import { Link } from 'react-router-dom';

// import './Button.css';

const button = props =>
  !props.link ? (
    <span
      onClick={props.onClick}
      disabled={props.disabled || props.loading}
      type={props.type}
    >
      {props.loading ? 'Loading...' : props.children}
    </span>
  ) : (
    <Link
      to={props.link}
    >
      {props.children}
    </Link>
  );

export default button;
