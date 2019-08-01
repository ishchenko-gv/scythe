import { createSelector } from 'reselect';

import getCurrentPlayerTablet from './get-current-player-tablet';

const getPlayerProducingPoints = playerTablet => {
  return playerTablet.producePoints;
};

export default createSelector(
  getCurrentPlayerTablet,
  getPlayerProducingPoints
);
