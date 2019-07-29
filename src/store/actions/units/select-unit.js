import { setSelectedUnit } from '../game-board';

const selectUnit = unitId => (dispatch, getState) => {
  const state = getState();
  const { phase } = state.gameBoard;
  const { currentPlayer } = state.gameBoard;
  const { movementPoints } = state.players[currentPlayer];
  const { units } = state;
  const unit = units[unitId];
  const isEnemyUnit = unit.owner !== currentPlayer;

  if (phase !== 'movement' || !movementPoints || isEnemyUnit) return;
  console.log(unitId);
  dispatch(setSelectedUnit(unitId));
};

export default selectUnit;
