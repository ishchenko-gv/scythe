import * as actionTypes from './action-types';

export const updateCellsInteractivity = (phase, currentPlayerId) => ({
  type: actionTypes.UPDATE_CELLS_INTERACTIVITY,
  phase,
  currentPlayerId
});

export const addResources = (cellId, resources) => ({
  type: actionTypes.ADD_RESOURCES,
  cellId,
  resources
});

export const updateCells = data => ({
  type: actionTypes.UPDATE_CELLS,
  data
});

export const setSelectedUnit = (cellId, unitIndex) => ({
  type: actionTypes.SET_SELECTED_UNIT,
  selectedUnit: {
    cellId,
    index: unitIndex
  }
});

export const resetCellsInteractivity = () => ({
  type: actionTypes.RESET_CELLS_INTERACTIVITY
});
