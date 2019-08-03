import { createSelector } from 'reselect';
import memoize from 'lodash/memoize';

import { getPhase } from '../general';
import getPlayerWorkersLocation from './get-player-workers-location';

const getIsAvailableForTrading = cellId => (phase, workersLocation) => {
  if (phase !== 'trading') return false;

  return workersLocation.includes(cellId);
};

export default memoize(cellId =>
  createSelector(
    getPhase,
    getPlayerWorkersLocation,
    getIsAvailableForTrading(cellId)
  )
);
