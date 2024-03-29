import React from 'react';
import { connect } from 'react-redux';

import styles from './playerTablet.module.scss';
import getCurrentPlayerActionsAsMatrix from '../../store/selectors/player-tablets/get-current-player-actions-as-matrix';
import PlayerInfo from './PlayerInfo';
import TabletAction from './TabletAction';
import getIsEndOfTurnAvailable from '../../store/selectors/game-board/general/get-is-end-of-turn-available';
import setNextPlayerAsCurrent from '../../store/actions/game-board/general/set-next-player-as-current';

const labelsDictionary = {
  earnPowerPoints: 'Получить очки вооружения',
  earnBattleCards: 'Получить карточки вооружения',
  modernization: 'Модернизация',
  producing: 'Производство',
  mechDeploy: 'Собрать механизм',
  movement: 'Передвижение',
  building: 'Строительство',
  trading: 'Торговля',
  earnReputation: 'Получить очки репутации',
  mobilization: 'Мобилизация'
};

const PlayerTablet = ({
  chosenAction,
  playerActions,
  isEndOFTurnAvailable,
  onNextPlayerSet
}) => (
  <div className={styles.wrap}>
    <div className={styles.actionsWrap}>
      {playerActions.map((actions, index) => (
        <div key={index} className={styles.actionsSection}>
          <div>
            {actions.top.map(action => (
              <TabletAction
                key={action}
                id={action}
                type={'top'}
                isSelected={action === chosenAction}
                label={labelsDictionary[action]}
              />
            ))}
          </div>
          <div>
            {actions.bottom.map(action => (
              <TabletAction
                key={action}
                id={action}
                type={'bottom'}
                isSelected={action === chosenAction}
                label={labelsDictionary[action]}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
    <PlayerInfo />
    <button onClick={onNextPlayerSet} disabled={!isEndOFTurnAvailable}>
      Завершить ход
    </button>
  </div>
);

const mapState = state => ({
  chosenAction: state.gameBoard.general.chosenAction,
  playerActions: getCurrentPlayerActionsAsMatrix(state),
  isEndOFTurnAvailable: getIsEndOfTurnAvailable(state)
});

const mapDispatch = dispatch => ({
  onNextPlayerSet: () => dispatch(setNextPlayerAsCurrent())
});

export default connect(
  mapState,
  mapDispatch
)(PlayerTablet);
