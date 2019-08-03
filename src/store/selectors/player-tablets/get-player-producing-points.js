import { createSelector } from 'reselect';

import getCurrentPlayerTablet from './get-current-player-tablet';

const getPlayerProducingPoints = playerTablet => {
  return playerTablet.producingPoints;
};

export default createSelector(
  getCurrentPlayerTablet,
  getPlayerProducingPoints
);
