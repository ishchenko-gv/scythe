import { createSelector } from 'reselect';

import getCurrentPlayerTablet from './get-current-player-tablet';

const getPlayerActionCost = tablet => {
  const { choosenAction } = tablet;

  return (
    tablet.actions[choosenAction] &&
    tablet.actions[choosenAction].cost &&
    tablet.actions[choosenAction].cost.type
  );
};

export default createSelector(
  getCurrentPlayerTablet,
  getPlayerActionCost
);
