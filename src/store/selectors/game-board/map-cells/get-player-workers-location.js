import { createSelector } from 'reselect';

import { getUnits } from '../units';
import { getCurrentPlayer } from '../general';

export default createSelector(
  getUnits,
  getCurrentPlayer,
  (units, playerId) => {
    const ids = Object.keys(units).reduce((acc, unitId) => {
      const unit = units[unitId];

      if (unit.owner === playerId) acc.push(unit.location);

      return acc;
    }, []);

    return [...new Set(ids)];
  }
);
