import { createSelector } from 'reselect';

import getPlayerTablets from './get-player-tablets';
import { getCurrentPlayer } from '../game-board/general';

const getCurrentPlayerTablet = (tablets, currentPlayer) => {
  return tablets[currentPlayer];
};

export default createSelector(
  getPlayerTablets,
  getCurrentPlayer,
  getCurrentPlayerTablet
);
