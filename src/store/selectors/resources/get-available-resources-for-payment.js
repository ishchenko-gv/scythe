import { createSelector } from 'reselect';

import getPlayerWorkersLocation from '../../actions/units/get-player-workers-location';
import getResources from './get-resources';
import { getPlayerActionCost } from '../players';
import { getPhase } from '../game-board';

const getAvailableResourcesForPayment = (
  resources,
  workersLocation,
  phase,
  requiredResourceType
) => {
  if (phase !== 'resourcePayment') return null;

  return resources
    .filter(
      resource =>
        workersLocation.includes(resource.location) &&
        resource.type === requiredResourceType
    )
    .reduce(
      (acc, resource) => {
        acc.types.push(resource.type);
        acc.locations.push(resource.location);

        acc.types = [...new Set(acc.types)];
        acc.locations = [...new Set(acc.locations)];

        return acc;
      },
      { types: [], locations: [] }
    );
};

export default createSelector(
  getResources,
  getPlayerWorkersLocation,
  getPhase,
  getPlayerActionCost,
  getAvailableResourcesForPayment
);
