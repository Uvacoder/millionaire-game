import React from 'react';
import classnames from 'classnames';
import './style.scss';

interface PropsChoiceBox {
  small?: boolean;
  regular?: boolean;
  className?: string | undefined;
  onFocus?: any;
  onClick?: any;
  children: React.ReactNode;
}

const ChoiceBox = React.forwardRef<any, PropsChoiceBox>((
  props, ref,
) => {
  const {
    small,
    regular,
    className,
    children,
    onFocus,
    onClick,
  } = props;

  const choiceBoxClassNames = classnames('choice-box', {
    'choice-box--s': small,
    'choice-box--m': regular,
  }, className);

  return (
    <button
      type="button"
      className={choiceBoxClassNames}
      ref={ref}
      onFocus={onFocus}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export default ChoiceBox;
