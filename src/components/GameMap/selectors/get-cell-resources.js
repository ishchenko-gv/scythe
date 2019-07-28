import { createSelector } from 'reselect';

export default id =>
  createSelector(
    state => state.resources,
    resources => resources.filter(resource => resource.location === id)
  );
