import { updateCells, resetCellsInteractivity, setSelectedUnit } from './index';

const selectUnit = unit => (dispatch, getState) => {
  const state = getState();
  const { phase } = state.gameBoard;
  const { currentPlayer } = state.gameBoard;
  const { movementPoints } = state.players[currentPlayer].tablet;

  if (phase !== 'movement' || !movementPoints) return;

  dispatch(resetCellsInteractivity());
  dispatch(setSelectedUnit(unit));
  const { cells } = state.gameMap;
  const neigborCells = cells[unit.cellId].neighborCells;
  const dataToUpdate = neigborCells.reduce((acc, id) => {
    acc[id] = { isInteractive: true };
    return acc;
  }, {});
  dispatch(updateCells(dataToUpdate));
};

export default selectUnit;
