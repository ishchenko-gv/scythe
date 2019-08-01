import { createSelector } from 'reselect';

import getResources from './get-resources';
import getPlayerWorkersLocation from '../map-cells/get-player-workers-location';

const getCurrentPlayerResources = (resources, workersLocation) => {
  return resources.filter(resource =>
    workersLocation.includes(resource.location)
  );
};

export default createSelector(
  getResources,
  getPlayerWorkersLocation,
  getCurrentPlayerResources
);
