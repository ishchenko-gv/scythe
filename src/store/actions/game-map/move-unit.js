import {
  removeUnit,
  addUnit,
  resetCellsInteractivity,
  setSelectedUnit,
  updateCells
} from './index';
import { decrementMovementPoints } from '../players';

const moveUnit = destinationCellId => (dispatch, getState) => {
  const state = getState();
  const { selectedUnit } = state.gameMap;
  const { cells } = state.gameMap;

  if (!selectedUnit) return;

  const sourceCellId = selectedUnit.cellId;

  if (destinationCellId === sourceCellId) return;

  const { currentPlayer } = state.gameBoard;
  const sourceCellUnitsCount = cells[sourceCellId].units.length;

  dispatch(addUnit(destinationCellId, 'worker'));
  dispatch(removeUnit(sourceCellId, selectedUnit.index));
  dispatch(setSelectedUnit(null));
  dispatch(resetCellsInteractivity());
  dispatch(decrementMovementPoints(currentPlayer));
  dispatch(
    updateCells({
      [destinationCellId]: { owner: currentPlayer },
      [sourceCellId]:
        sourceCellUnitsCount === 1 ? { owner: null } : { owner: currentPlayer }
    })
  );
};

export default moveUnit;
