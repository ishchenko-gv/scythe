import * as actionTypes from './action-types';

export const updateCells = data => ({
  type: actionTypes.UPDATE_CELLS,
  data
});

export const resetCellsInteractivity = () => ({
  type: actionTypes.RESET_CELLS_INTERACTIVITY
});
