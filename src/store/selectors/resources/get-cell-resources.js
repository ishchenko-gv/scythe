import { createSelector } from 'reselect';
import memoize from 'lodash/memoize';

import getResources from './get-resources';

const getCellResources = id => resources =>
  resources
    .filter(resource => resource.location === id)
    .reduce((acc, resource) => {
      if (!acc[resource.type]) acc[resource.type] = 0;

      acc[resource.type] = acc[resource.type] + 1;

      return acc;
    }, {});

export default memoize(id =>
  createSelector(
    getResources,
    getCellResources(id)
  )
);
