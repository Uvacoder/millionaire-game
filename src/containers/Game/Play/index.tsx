import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
// import classnames from 'classnames'
import ComponentWrapper from '../../../components/ComponentWrapper';
import Container from '../../../components/Container';
import ChoiceBox from '../../../components/ChoiceBox';
import Title from '../../../components/Title';
import NavButton from '../../../components/NavButton';
import Score from '../../../components/Score';
import data from '../../../data/questions.json';
import './style.scss';

interface Props {
  match: {
    params: {
      questionNumber: string
    }
  };
}

const Play: React.FC<Props> = () => {
  const { questions } = data.games[0];
  const { currency } = data.games[0];

  const totalMoneyPoints = questions.map((game) => game.money);

  const uniq = (a: number[]) => [...new Set(a)];

  const [possibleWins] = useState(uniq(totalMoneyPoints));

  const [winningPoints] = useState(uniq(totalMoneyPoints));

  const [lastWin, setLastWin] = useState<number | undefined>(0);

  const [isGameOver, setGameOver] = useState<boolean>(false);

  const [isNavVisible, setNavVisibility] = React.useState(false);

  const choiceBoxRef: HTMLButtonElement[] = [];

  let rightChosenAnswer: number[] = [];

  const getQuestion = () => {
    const possibleQuestion = questions.filter((question) => question.money === possibleWins[0]);
    const randomized = Math.floor(Math.random() * possibleQuestion.length);
    const questionToShow = possibleQuestion[randomized];

    return questionToShow;
  };

  const [activeQuestion, setActiveQuestion] = useState(getQuestion());

  const getLetter = (iterator: number) => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[iterator];

  const handleNavVisibility = () => setNavVisibility(!isNavVisible);

  const handleChoiceBoxClick = (answerNumber: number) => {
    const { classList } = choiceBoxRef[answerNumber];
    const { correct } = activeQuestion;

    const setTimeoutAndRemoveClassNames = (
      cb: () => void,
      shoudlRemoveClassNames = true,
      time = 500,
    ) => {
      setTimeout(() => {
        cb();
        if (shoudlRemoveClassNames) {
          classList.remove('choice-box--correct');
          classList.remove('choice-box--right');
        }
      }, time);
    };

    // check if answer is correct
    if (correct.includes(answerNumber)) {
      classList.add('choice-box--correct');

      if (!rightChosenAnswer.includes(answerNumber)) {
        rightChosenAnswer = [...rightChosenAnswer, answerNumber];
      }

      // if all chosen answers are correct
      if (rightChosenAnswer.length === correct.length) {
        const last = possibleWins.shift();
        setLastWin(last);
        rightChosenAnswer = [];

        if (possibleWins.length === 0) {
          setGameOver(true);
        }

        setTimeoutAndRemoveClassNames(() => {
          setActiveQuestion(getQuestion());
          choiceBoxRef.map((box) => {
            if (box !== null) {
              box.classList.remove('choice-box--correct');
              box.classList.remove('choice-box--right');
            }
            return box;
          });
        }, false);
      }
    } else {
      classList.add('choice-box--wrong');
      setTimeoutAndRemoveClassNames(() => setGameOver(true), true, 300);
    }
  };

  const setChoiceBoxRef = (ref: HTMLButtonElement) => {
    choiceBoxRef.push(ref);
  };

  const handleChoiceBoxOnFocus = (i: number) => {
    setTimeout(() => choiceBoxRef[i].blur(), 50);
  };

  return (
    isGameOver ? (
      <Redirect to={{ pathname: '/over', state: { money: lastWin, currency } }} />
    ) : (
      <>
        {
            activeQuestion && (
              <ComponentWrapper name="play">
                <NavButton open={isNavVisible} onClick={handleNavVisibility} />
                <Container>
                  <Title bold className="play__title">{activeQuestion.question}</Title>
                  <div className="choice-container">
                    {
                      activeQuestion.content.map((answer, i = 0) => (
                        <ChoiceBox
                          regular
                          key={i}
                          ref={(r: HTMLButtonElement) => setChoiceBoxRef(r)}
                          onFocus={() => handleChoiceBoxOnFocus(i)}
                          onClick={() => handleChoiceBoxClick(i)}
                        >
                          <div className="choice-box__text">
                            <span className="choice-box__sort-symbol">{getLetter(i)}</span>
                            <span className="choice-box__answer">{answer}</span>
                          </div>
                        </ChoiceBox>
                      ))
                    }
                  </div>
                </Container>
                <Score
                  visible={isNavVisible}
                  scores={winningPoints.slice(0).reverse()}
                  allWins={possibleWins}
                  lastWin={lastWin}
                  currency={currency}
                />
              </ComponentWrapper>
            )
          }
      </>
    )
  );
};

export default Play;
