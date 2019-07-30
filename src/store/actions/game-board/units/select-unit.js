import { setSelectedUnit } from '../general';
import {
  getPhase,
  getCurrentPlayer
} from '../../../selectors/game-board/general';
import { getUnits } from '../../../selectors/game-board/units';
import { getPlayerTablets } from '../../../selectors/playerTablets';

const selectUnit = unitId => (dispatch, getState) => {
  const state = getState();
  const phase = getPhase(state);
  const currentPlayer = getCurrentPlayer(state);
  const playerTablets = getPlayerTablets(state);
  const { movementPoints } = playerTablets[currentPlayer];
  const units = getUnits(state);
  const unit = units[unitId];
  const isEnemyUnit = unit.owner !== currentPlayer;

  console.log(phase, currentPlayer, isEnemyUnit);

  if (phase !== 'movement' || !movementPoints || isEnemyUnit) return;
  console.log(unitId);
  dispatch(setSelectedUnit(unitId));
};

export default selectUnit;
