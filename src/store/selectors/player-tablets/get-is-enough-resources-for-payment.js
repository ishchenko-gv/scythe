import { createSelector } from 'reselect';
import memoize from 'lodash/memoize';

import getCurrentPlayerTablet from './get-current-player-tablet';
import getCurrentPlayerResources from '../game-board/resources/get-current-player-resources';

const getIsEnoughResourcesForPayment = actionId => (tablet, resources) => {
  const { cost, type } = tablet.actions[actionId];

  if (!cost) return true;

  switch (type) {
    case 'top':
      const availablePoints = tablet[cost.type];
      return availablePoints >= cost.count;
    case 'bottom':
      return (
        resources.filter(resource => resource.type === cost.type).length >=
        cost.count
      );
    default:
      return false;
  }
};

export default memoize(actionId =>
  createSelector(
    getCurrentPlayerTablet,
    getCurrentPlayerResources,
    getIsEnoughResourcesForPayment(actionId)
  )
);
