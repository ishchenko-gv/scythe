import React from 'react';
import { connect } from 'react-redux';

import Cell from './Cell';

const GameMap = React.memo(
  ({ mapCells }) => {
    return (
      <>
        {Object.keys(mapCells).map(cell => (
          <Cell id={cell} type={mapCells[cell].type} />
        ))}
      </>
    );
  },
  () => true
);

const mapState = state => ({
  mapCells: state.gameMap.cells
});

export default connect(mapState)(GameMap);
