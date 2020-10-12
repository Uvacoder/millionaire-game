import React from 'react';
import { Link } from 'react-router-dom';
import TriangleBackground from '../../../components/TriangleBackgroud';
import ComponentWrapper from '../../../components/ComponentWrapper';
import Title from '../../../components/Title';
import Container from '../../../components/Container';
import { ReactComponent as HandSVG } from '../../../assets/hand.svg';
import './style.scss';

const text = {
  title: 'Who wants to be a millionaire?',
  buttonStart: 'Start',
};

const Start = () => (
  <ComponentWrapper name="start">
    <TriangleBackground color="orange-5" />
    <Container split center>
      <div className="container__image-wrapper">
        <HandSVG />
      </div>
      <div className="container__text">
        <Title large className="start__title">{text.title}</Title>
        <Link
          to="/play"
          className="button button--orange"
        >
          {text.buttonStart}
        </Link>
      </div>
    </Container>
  </ComponentWrapper>
);

export default Start;
