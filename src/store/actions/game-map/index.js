import * as actionTypes from './action-types';

export const updateCells = data => ({
  type: actionTypes.UPDATE_CELLS,
  data
});

export const resetActiveCells = () => ({
  type: actionTypes.ACTIVE_CELLS_RESET
});

export const setActiveCells = cells => ({
  type: actionTypes.ACTIVE_CELLS_SET,
  cells
});
