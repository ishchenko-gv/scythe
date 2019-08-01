import React from 'react';
import { connect } from 'react-redux';

import styles from './playerTablet.module.scss';
import { getCurrentPlayerActionsAsMatrix } from '../../store/selectors/player-tablets';
import PlayerInfo from './PlayerInfo';
import EarnPowerPoints from './EarnPowerPoints';
import EarnBattleCards from './EarnBatlleCards';
import Modernization from './Modernization';
import Producing from './Producing';
import MechDeploy from './MechDeploy';
import Movement from './Movement';

const actionsMap = {
  earnPowerPoints: <EarnPowerPoints />,
  earnBattleCards: <EarnBattleCards />,
  modernization: <Modernization />,
  producing: <Producing />,
  mechDeploy: <MechDeploy />,
  movement: <Movement />,
  building: 'building',
  trading: 'trading',
  mobilization: 'mobilization'
};

const PlayerTablet = ({ playerActions }) => (
  <div className={styles.wrap}>
    <div className={styles.actionsWrap}>
      {playerActions.map(actions => (
        <div className={styles.actionsSection}>
          <div>
            {actions.top.map(action => (
              <>{actionsMap[action]}</>
            ))}
          </div>
          <div>
            {actions.bottom.map(action => (
              <>{actionsMap[action]}</>
            ))}
          </div>
        </div>
      ))}
    </div>
    <PlayerInfo />
    <button>Завершить ход</button>
  </div>
);

const mapState = state => ({
  playerActions: getCurrentPlayerActionsAsMatrix(state)
});

export default connect(mapState)(PlayerTablet);
