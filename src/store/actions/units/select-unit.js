import { updateCells, resetCellsInteractivity } from '../game-map';
import { setSelectedUnit } from '../game-board';

const selectUnit = unit => (dispatch, getState) => {
  const state = getState();
  const { phase } = state.gameBoard;
  const { currentPlayer } = state.gameBoard;
  const { movementPoints } = state.players[currentPlayer];
  const { units } = state;

  if (phase !== 'movement' || !movementPoints) return;

  dispatch(resetCellsInteractivity());
  dispatch(setSelectedUnit(unit));
  const { cells } = state.gameMap;
  const neigborCells = cells[units[unit].location].neighborCells;
  const dataToUpdate = neigborCells.reduce((acc, cell) => {
    acc[cell.id] = { isInteractive: true };
    return acc;
  }, {});
  dispatch(updateCells(dataToUpdate));
};

export default selectUnit;
