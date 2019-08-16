import { setSelectedUnit, setPhase } from '../general';
import { changeUnitLocation } from './index';
import { decrementPoints } from '../../playerTablets';
import { getUnits } from '../../../selectors/game-board/units';
import {
  getSelectedUnit,
  getCurrentPlayer
} from '../../../selectors/game-board/general';
import { getCurrentPlayerTablet } from '../../../selectors/player-tablets';

/**
 * Set new loaction for selected unit
 * and set the next phase if movement points are over
 *
 * @param {string} destinationCellId
 *
 * @return {function}
 */
const moveUnit = destinationCellId => (dispatch, getState) => {
  const state = getState();
  const selectedUnitId = getSelectedUnit(state);
  const selectedUnit = getUnits(state)[selectedUnitId];
  const currentPlayer = getCurrentPlayer(state);
  const tablet = getCurrentPlayerTablet(state);
  const { movementPoints } = tablet;

  if (!selectedUnit) return;

  const sourceCellId = selectedUnit.location;

  if (destinationCellId === sourceCellId) return;

  dispatch(changeUnitLocation(selectedUnitId, destinationCellId));
  dispatch(setSelectedUnit(null));
  dispatch(decrementPoints(currentPlayer, 'movementPoints'));

  if (movementPoints === 1) dispatch(setPhase('topActionComplete'));
};

export default moveUnit;
