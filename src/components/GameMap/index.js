import React from 'react';
import { connect } from 'react-redux';

import { getMapCells } from '../../store/selectors/game-board/map-cells';
import Cell from './Cell';

const GameMap = ({ mapCells }) => (
  <>
    {Object.keys(mapCells).map(cell => (
      <Cell key={cell} id={cell} type={mapCells[cell].type} />
    ))}
  </>
);

const mapState = state => {
  console.log(getMapCells(state));
  return {
    mapCells: getMapCells(state)
  };
};

export default connect(mapState)(GameMap);
