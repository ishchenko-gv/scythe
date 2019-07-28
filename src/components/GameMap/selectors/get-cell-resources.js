import { createSelector } from 'reselect';
import memoize from 'lodash/memoize';

export default memoize(id =>
  createSelector(
    state => state.resources,
    resources =>
      resources
        .filter(resource => resource.location === id)
        .reduce((acc, resource) => {
          if (!acc[resource.type]) acc[resource.type] = 0;

          acc[resource.type] = acc[resource.type] + 1;

          return acc;
        }, {})
  )
);
