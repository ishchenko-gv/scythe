import React from 'react';

import styles from './playerTablet.module.scss';
import PlayerInfo from './PlayerInfo';
import GainPower from './GainPower';
import Modernization from './Modernization';
import Producing from './Producing';
import MechDeploy from './MechDeploy';
import Movement from './Movement';

const PlayerTablet = () => {
  return (
    <div className={styles.wrap}>
      <PlayerInfo />
      <GainPower />
      <br />
      <Modernization />
      <hr />
      <Producing />
      <br />
      <MechDeploy />
      <hr />
      <Movement />
      <br />
      Строительство
      <hr />
      Торговля
      <br />
      Мобилизация
      <hr />
      <button>Завершить ход</button>
    </div>
  );
};

export default PlayerTablet;
