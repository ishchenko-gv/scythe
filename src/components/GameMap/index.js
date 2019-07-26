import React from 'react';
import { connect } from 'react-redux';

import Cell from './Cell'

const mapState = state => ({
  mapCells: state.gameMap.cells
})

const GameMap = ({ mapCells }) => {
  return (
    <>
      {Object.keys(mapCells).map(cell => (
        <Cell id={cell} type={mapCells[cell].type} />
      ))}
    </>
  );
};

export default connect(mapState)(GameMap);