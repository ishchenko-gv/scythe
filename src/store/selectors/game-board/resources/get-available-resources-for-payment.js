import { createSelector } from 'reselect';

import { getPlayerWorkersLocation } from '../map-cells';
import getResources from './get-resources';
import { getPlayerActionCost } from '../../player-tablets';
import { getPhase } from '../general';

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
