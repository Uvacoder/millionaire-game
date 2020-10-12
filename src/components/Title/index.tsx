import React from 'react';
import classnames from 'classnames';

interface PropsTitle {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  bold?: boolean;
  centered?: boolean;
  className?: string | string[];
  children?: React.ReactNode;
}

const Title = (props: PropsTitle) => {
  const {
    small, medium, large, bold, className, children, centered,
  } = props;

  const titleClassNames = classnames(className, {
    'font--s': small,
    'font--m': medium,
    'font--l': large,
    'font--bold': bold || large,
    '--text-centered': centered,
  });

  if (small) {
    return <h4 className={titleClassNames}>{children}</h4>;
  }

  if (medium) {
    return <h3 className={titleClassNames}>{children}</h3>;
  }

  if (large) {
    return <h1 className={titleClassNames}>{children}</h1>;
  }

  return <h3 className={['font--m', titleClassNames].join(' ')}>{children}</h3>;
};

export default Title;
