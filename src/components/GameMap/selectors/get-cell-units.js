import { createSelector } from 'reselect';

export default id =>
  createSelector(
    state => state.units,
    units =>
      Object.keys(units).reduce((acc, unit) => {
        if (units[unit].location === id) acc.push({ ...units[unit], id: unit });
        return acc;
      }, [])
  );
