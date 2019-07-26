import React from 'react';

import GameMap from '../GameMap';
import PlayerTablet from '../PlayerTablet';
import PhaseObserver from '../PhaseObserver';

const GameBoard = () => {
  return (
    <>
      <GameMap />
      <PlayerTablet />
      <PhaseObserver />
    </>
  );
};

export default GameBoard;
