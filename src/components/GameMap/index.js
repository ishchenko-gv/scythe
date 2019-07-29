import React from 'react';
import { connect } from 'react-redux';

import Cell from './Cell';

const GameMap = ({ mapCells }) => (
  <>
    {Object.keys(mapCells).map(cell => (
      <Cell key={cell} id={cell} type={mapCells[cell].type} />
    ))}
  </>
);

const mapState = state => ({
  mapCells: state.gameMap.cells
});

export default connect(mapState)(GameMap);
