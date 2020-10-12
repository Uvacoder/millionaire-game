import React from 'react';
import classnames from 'classnames';
import formatNumberWithCommas from '../../utils/js/formatNumberWithCommas';
import ChoiceBox from '../ChoiceBox';
import './score.scss';

interface PropsScoreTab {
  visible?: boolean;
  scores: number[];
  currency: string;
  allWins: number[];
  lastWin: number | undefined;
}

const ScoreTab = (props: PropsScoreTab) => {
  const {
    scores, currency, allWins, lastWin, visible,
  } = props;

  const scoreClassNames = classnames('score', { 'score--visible': visible });

  const scoreChildClassNames = (point: number) => classnames('choice-box--wrapper', {
    'choice-box--wrapper--active': (lastWin === 0 && point === allWins[0]) || (lastWin !== undefined && lastWin > 0 && point === allWins[0]),
    'choice-box--visible': visible,
  });

  const choiceBoxClassNames = (point: number) => classnames('choice-box choice-box--s score__point', {
    'choice-box--active': ((lastWin === 0 && point === allWins[0]) || (lastWin !== undefined && lastWin > 0 && point === allWins[0])),
    'choice-box--completed': !allWins.includes(point),
  });

  return (
    <aside className={scoreClassNames}>
      <ul>
        {scores.map(
          (point) => (
            <li key={point} className={scoreChildClassNames(point)}>
              <ChoiceBox small className={choiceBoxClassNames(point)}>
                <span>{currency}</span>
                <span>{formatNumberWithCommas(point)}</span>
              </ChoiceBox>
            </li>
          ),
        )}
      </ul>
    </aside>
  );
};

export default ScoreTab;
