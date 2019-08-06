import * as actionTypes from './action-types';

export const removeUnit = (cellId, unitIndex) => ({
  type: actionTypes.REMOVE_UNIT,
  cellId,
  unitIndex
});

export const addUnit = (cellId, unit) => ({
  type: actionTypes.ADD_UNIT,
  cellId,
  unit
});

export const changeUnitLocation = (unitId, destinationCellId) => ({
  type: actionTypes.UNIT_LOCATION_CHANGE,
  unitId,
  destinationCellId
});
