import { setSelectedUnit } from '../general';
import {
  getPhase,
  getCurrentPlayer
} from '../../../selectors/game-board/general';
import { getUnits } from '../../../selectors/game-board/units';
import { getCurrentPlayerTablet } from '../../../selectors/player-tablets';

const selectUnit = unitId => (dispatch, getState) => {
  const state = getState();
  const phase = getPhase(state);
  const currentPlayer = getCurrentPlayer(state);
  const tablet = getCurrentPlayerTablet(state);
  const { movementPoints } = tablet;
  const units = getUnits(state);
  const unit = units[unitId];
  const isEnemyUnit = unit.owner !== currentPlayer;

  if (phase !== 'movement' || !movementPoints || isEnemyUnit) return;
  dispatch(setSelectedUnit(unitId));
};

export default selectUnit;
