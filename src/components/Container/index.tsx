import React from 'react';
import classnames from 'classnames';
import './style.scss';

interface PropsContainer {
  split?: boolean;
  center?: boolean;
  className?: string;
  children?: any;
}

const Container = (props: PropsContainer) => {
  const {
    split, center, children, className,
  } = props;

  const containerClassNames = classnames('container', {
    'container--split': split,
    'container--center': center,
  }, className);

  return (
    <section className={containerClassNames}>
      {children}
    </section>
  );
};

export default Container;
