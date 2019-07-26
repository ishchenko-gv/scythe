import React from 'react';

import styles from './playerTablet.module.scss';
import Producing from './Producing';
import MechDeploy from './MechDeploy';
import Movement from './Movement';

const PlayerTablet = () => {
  return (
    <div className={styles.wrap}>
      tablet
      <Producing />
      <MechDeploy />
      <Movement />
    </div>
  );
};

export default PlayerTablet;
