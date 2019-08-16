import { setSelectedUnit } from '../general';
import {
  getPhase,
  getCurrentPlayer,
  getSelectedUnit
} from '../../../selectors/game-board/general';
import { getUnits } from '../../../selectors/game-board/units';
import { getCurrentPlayerTablet } from '../../../selectors/player-tablets';

/**
 * Select unit for player's action
 *
 * @param {string} unitId
 *
 * @return {function}
 */
const selectUnit = unitId => (dispatch, getState) => {
  const state = getState();
  const phase = getPhase(state);
  const currentPlayer = getCurrentPlayer(state);
  const tablet = getCurrentPlayerTablet(state);
  const selectedUnit = getSelectedUnit(state);
  const { movementPoints } = tablet;
  const units = getUnits(state);
  const unit = units[unitId];
  const isEnemyUnit = unit.owner !== currentPlayer;

  if (phase !== 'movement' || !movementPoints || isEnemyUnit) return;

  dispatch(setSelectedUnit(unitId === selectedUnit ? null : unitId));
};

export default selectUnit;
