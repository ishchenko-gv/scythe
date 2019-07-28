import { resetCellsInteractivity } from '../game-map';
import { setSelectedUnit } from '../game-board';
import { changeUnitLocation } from './index';
import { decrementMovementPoints } from '../players';

const moveUnit = destinationCellId => (dispatch, getState) => {
  const state = getState();
  const { selectedUnit: selectedUnitId } = state.gameBoard;
  const selectedUnit = state.units[selectedUnitId];

  if (!selectedUnit) return;

  const sourceCellId = selectedUnit.location;

  if (destinationCellId === sourceCellId) return;

  const { currentPlayer } = state.gameBoard;

  dispatch(changeUnitLocation(selectedUnitId, destinationCellId));
  dispatch(setSelectedUnit(null));
  dispatch(resetCellsInteractivity());
  dispatch(decrementMovementPoints(currentPlayer));
};

export default moveUnit;
