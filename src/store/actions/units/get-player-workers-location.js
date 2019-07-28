import { createSelector } from 'reselect';

export default createSelector(
  state => state.units,
  state => state.gameBoard.currentPlayer,
  (units, playerId) => {
    const ids = Object.keys(units).reduce((acc, unitId) => {
      const unit = units[unitId];

      if (unit.owner === playerId) acc.push(unit.location);

      return acc;
    }, []);

    return [...new Set(ids)];
  }
);
