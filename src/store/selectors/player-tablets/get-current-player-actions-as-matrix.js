import { createSelector } from 'reselect';

import getCurrentPlayerTablet from './get-current-player-tablet';

const getCurrentPlayerActionsAsMatrix = tablet => {
  const { actions } = tablet;

  return Object.keys(actions).reduce((acc, action) => {
    if (!acc[actions[action].section]) acc[actions[action].section] = {};
    if (!acc[actions[action].section][actions[action].type])
      acc[actions[action].section][actions[action].type] = [];

    acc[actions[action].section][actions[action].type].push(action);

    return acc;
  }, []);
};

export default createSelector(
  getCurrentPlayerTablet,
  getCurrentPlayerActionsAsMatrix
);
