import { createSelector } from 'reselect';

import getUnits from '../units/get-units';
import getCurrentPlayer from '../general/get-current-player';

export default createSelector(
  getUnits,
  getCurrentPlayer,
  (units, playerId) => {
    const ids = Object.keys(units).reduce((acc, unitId) => {
      const unit = units[unitId];

      if (unit.owner === playerId && unit.type === 'worker')
        acc.push(unit.location);

      return acc;
    }, []);

    return [...new Set(ids)];
  }
);
