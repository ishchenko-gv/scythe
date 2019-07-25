import React from 'react';
import { connect } from 'react-redux';

import styles from './gameMap.module.scss';

const mapState = state => ({
  mapCells: state.gameMap.cells
})

const GameMap = ({ mapCells }) => {
  return (
    <>
      {Object.keys(mapCells).map(cell => (
        <button className={[styles.cell, styles[`cell__${cell}`]].join(' ')}>{cell}</button>
      ))}
    </>
  );
};

export default connect(mapState)(GameMap);