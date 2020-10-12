import React from 'react';
import classnames from 'classnames';
import './style.scss';

interface PropsComponentWrapper {
  name: string;
  className?: string;
  children: any;
}

const ComponentWrapper = (props: PropsComponentWrapper) => {
  const { name, className, children } = props;

  const componentWrapperClassNames = classnames(name, 'component', className);

  return (
    <section className={componentWrapperClassNames}>
      {children}
    </section>
  );
};

export default ComponentWrapper;
