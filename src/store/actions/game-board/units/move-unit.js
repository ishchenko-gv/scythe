import { setSelectedUnit } from '../general';
import { changeUnitLocation } from './index';
import { decrementMovementPoints } from '../../playerTablets';
import { getUnits } from '../../../selectors/game-board/units';
import {
  getCurrentPlayer,
  getSelectedUnit
} from '../../../selectors/game-board/general';

const moveUnit = destinationCellId => (dispatch, getState) => {
  const state = getState();
  const selectedUnitId = getSelectedUnit(state);
  const selectedUnit = getUnits(state)[selectedUnitId];

  if (!selectedUnit) return;

  const sourceCellId = selectedUnit.location;

  if (destinationCellId === sourceCellId) return;

  const currentPlayer = getCurrentPlayer(state);

  dispatch(changeUnitLocation(selectedUnitId, destinationCellId));
  dispatch(setSelectedUnit(null));
  dispatch(decrementMovementPoints(currentPlayer));
};

export default moveUnit;
