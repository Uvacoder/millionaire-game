import React from 'react';
import classnames from 'classnames';
import './style.scss';

type Color =
  'orange-120' |
  'orange-100' |
  'orange-80' |
  'orange-5' |
  'green-100' |
  'green-5' |
  'red-100' |
  'red-5' |
  'black-100' |
  'black-40' |
  'black-5' |
  'white-100';

const TriangleBackground = ({ color }: { color: Color }) => {
  const triangleBgClassName = classnames('triangle-bg', color);
  return (
    <div className={triangleBgClassName} />
  );
};

export default TriangleBackground;
