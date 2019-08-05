import { createSelector } from 'reselect';
import getPlayers from './get-players';
import getCurrentPlayer from './get-current-player';

const getNextPlayer = (players, currentPlayer) => {
  const currentPlayerIndex = players.findIndex(
    player => player === currentPlayer
  );

  return currentPlayerIndex + 1 === players.length
    ? players[0]
    : players[currentPlayerIndex + 1];
};

export default createSelector(
  getPlayers,
  getCurrentPlayer,
  getNextPlayer
);
