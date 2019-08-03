import { createSelector } from 'reselect';

import getCurrentPlayerTablet from './get-current-player-tablet';

const getPlayerActionCost = tablet => {
  const { chosenAction } = tablet;

  return (
    tablet.actions[chosenAction] &&
    tablet.actions[chosenAction].cost &&
    tablet.actions[chosenAction].cost.type
  );
};

export default createSelector(
  getCurrentPlayerTablet,
  getPlayerActionCost
);
