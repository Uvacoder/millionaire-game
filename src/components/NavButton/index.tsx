import React from 'react';
import classnames from 'classnames';
import './style.scss';

interface PropsNavButton {
  open: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

const NavButton = (props: PropsNavButton) => {
  const { open, onClick } = props;

  const navButtonClassNames = classnames('nav-button', {
    change: open,
  });

  const handleKeyDown = (e: { keyCode: number }) => (
    e.keyCode === 27 && onClick()
  );

  return (
    <button
      type="button"
      className={navButtonClassNames}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-haspopup="true"
      aria-controls="menu2"
    >
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
    </button>
  );
};

export default NavButton;
