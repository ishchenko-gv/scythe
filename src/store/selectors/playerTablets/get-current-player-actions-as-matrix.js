import { createSelector } from 'reselect';

import getCurrentPlayerTablet from './get-current-player-tablet';

const getCurrentPlayerActionsAsMatrix = tablet => {
  const { actions } = tablet;

  const actionsMap = Object.keys(actions).reduce((acc, action) => {
    if (!acc[actions[action].section]) acc[actions[action].section] = [];

    acc[actions[action].section].push(action);

    return acc;
  }, {});

  return Object.values(actionsMap);
};

export default createSelector(
  getCurrentPlayerTablet,
  getCurrentPlayerActionsAsMatrix
);
