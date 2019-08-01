import { createSelector } from 'reselect';

import getCurrentPlayerTablet from './get-current-player-tablet';

const getCurrentPlayerActions = tablet => {
  return tablet.actions;
};

export default createSelector(
  getCurrentPlayerTablet,
  getCurrentPlayerActions
)
