import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './style.scss';

interface PropsButton {
  to?: string;
  className?: string;
  children?: any;
  orange?: boolean;
}

const Button = (props: PropsButton) => {
  const {
    to, orange, className, children,
  } = props;

  const buttonClassnames = classnames('button', {
    'button--orange': orange,
  }, className);

  return to ? (
    <Link to={to} className={buttonClassnames}>{children}</Link>
  ) : (
    <button type="button" className="classNames">{children}</button>
  );
};

export default Button;
