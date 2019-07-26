import * as actionTypes from './action-types';

export const updateCells = data => ({
  type: actionTypes.UPDATE_CELLS,
  data
});

export const setSelectedUnit = selectedUnit => ({
  type: actionTypes.SET_SELECTED_UNIT,
  selectedUnit
});

export const resetCellsInteractivity = () => ({
  type: actionTypes.RESET_CELLS_INTERACTIVITY
});

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
