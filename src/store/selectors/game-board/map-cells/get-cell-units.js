import { createSelector } from 'reselect';
import memoize from 'lodash/memoize';

import getUnits from '../units/get-units';

export default memoize(id =>
  createSelector(
    getUnits,
    units =>
      Object.keys(units).reduce((acc, unit) => {
        if (units[unit].location === id) acc.push({ ...units[unit], id: unit });
        return acc;
      }, [])
  )
);
