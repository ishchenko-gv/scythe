import React from 'react';
import { connect } from 'react-redux';

import styles from './gameMap.module.scss';
import { getMapCells } from '../../store/selectors/game-board/map-cells';
import Cell from './Cell';

const GameBoard = ({ mapCells }) => (
  <div className={styles.wrap}>
    {Object.keys(mapCells).map(cell => (
      <Cell key={cell} id={cell} type={mapCells[cell].type} />
    ))}
  </div>
);

const mapState = state => ({
  mapCells: getMapCells(state)
});

export default connect(mapState)(GameBoard);
