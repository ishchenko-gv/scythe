import { createSelector } from 'reselect';

import getCurrentPlayerTablet from './get-current-player-tablet';

const getPlayerActionCost = (tablet, chosenAction) =>
  tablet.actions[chosenAction] &&
  tablet.actions[chosenAction].cost &&
  tablet.actions[chosenAction].cost.type;

export default createSelector(
  getCurrentPlayerTablet,
  state => state.gameBoard.general.chosenAction,
  getPlayerActionCost
);
