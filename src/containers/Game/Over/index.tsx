import React from 'react';
import ComponentWrapper from '../../../components/ComponentWrapper';
import Title from '../../../components/Title';
import Container from '../../../components/Container';
import { ReactComponent as HandSVG } from '../../../assets/hand.svg';
import Button from '../../../components/Button';
import './style.scss';

interface Props {
  location: {
    state: {
      money: number,
      currency: string
    }
  }
}

const text = {
  title: 'Total score:',
  buttonTryAgain: 'Try Again',
};

const Start: React.FC<Props> = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { money, currency } = props.location.state;
  return (
    <ComponentWrapper name="over">
      <Container split center>
        <div className="container__image-wrapper">
          <HandSVG />
        </div>
        <div className="container__text">
          <Title className="over__score-title">{text.title}</Title>
          <Title large className="over__result">
            {currency}
            {money}
            {' '}
            earned
          </Title>
          <Button orange to="/play">{text.buttonTryAgain}</Button>
        </div>
      </Container>
    </ComponentWrapper>
  );
};

export default Start;
