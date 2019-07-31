import React from 'react';
import { connect } from 'react-redux';

import styles from './playerTablet.module.scss';
import { getCurrentPlayerActionsAsMatrix } from '../../store/selectors/playerTablets';
import PlayerInfo from './PlayerInfo';
import GainPower from './GainPower';
import Modernization from './Modernization';
import Producing from './Producing';
import MechDeploy from './MechDeploy';
import Movement from './Movement';

const actionsMap = {
  gainPower: <GainPower />,
  modernization: <Modernization />,
  producing: <Producing />,
  mechDeploy: <MechDeploy />,
  movement: <Movement />,
  building: 'building',
  trading: 'trading',
  mobilization: 'mobilization'
};

const PlayerTablet = ({ playerActions }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.actionsWrap}>
        {playerActions.map(actions => (
          <div className={styles.actionsSection}>
            {actions.map(action => (
              <div>{actionsMap[action]}</div>
            ))}
          </div>
        ))}
      </div>
      <PlayerInfo />
      <button>Завершить ход</button>
    </div>
  );
};

const mapState = state => ({
  playerActions: getCurrentPlayerActionsAsMatrix(state)
});

export default connect(mapState)(PlayerTablet);
