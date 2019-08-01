import { createSelector } from 'reselect';
import memoize from 'lodash/memoize';

import getCurrentPlayerTablet from './get-current-player-tablet'

const getIsEnoughResourcesForPayment = (actionId, tablet) => {
  const { cost } = tablet.actions[actionId];
  const availablePoints = tablet[cost.type];

  return availablePoints >= cost.count;
};

export default memoize(actionId =>
  createSelector(
    getCurrentPlayerTablet,
    tablet => getIsEnoughResourcesForPayment(actionId, tablet)
  )
);
