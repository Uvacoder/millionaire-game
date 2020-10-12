import React from 'react';
import ComponentWrapper from '../ComponentWrapper';
import Container from '../Container';
import Title from '../Title';

const NotFound = () => {
  const text = {
    title: '404 Not Found',
  };

  return (
    <ComponentWrapper name="not-found">
      <Container center>
        <Title large centered>{text.title}</Title>
      </Container>
    </ComponentWrapper>
  );
};

export default NotFound;
