import { createSelector } from 'reselect';
import memoize from 'lodash/memoize';

export default memoize(id =>
  createSelector(
    state => state.units,
    units =>
      Object.keys(units).reduce((acc, unit) => {
        if (units[unit].location === id) acc.push({ ...units[unit], id: unit });
        return acc;
      }, [])
  )
);
