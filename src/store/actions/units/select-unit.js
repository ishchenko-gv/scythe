import { updateCells, resetCellsInteractivity } from '../game-map';
import { setSelectedUnit } from '../game-board';
import getCellUnits from './get-cell-units';

const selectUnit = unitId => (dispatch, getState) => {
  const state = getState();
  const { phase } = state.gameBoard;
  const { currentPlayer } = state.gameBoard;
  const { movementPoints } = state.players[currentPlayer];
  const { units } = state;
  const unit = units[unitId];
  const isEnemyUnit = unit.owner !== currentPlayer;

  if (phase !== 'movement' || !movementPoints || isEnemyUnit) return;

  dispatch(resetCellsInteractivity());
  dispatch(setSelectedUnit(unitId));

  const { cells } = state.gameMap;
  const { neighborCells } = cells[unit.location];
  const isWorker = unit.type === 'worker';

  const dataToUpdate = neighborCells.reduce((acc, cell) => {
    const neighborCellUnits = getCellUnits(cell.id)(state);
    const hasEnemyUnits =
      neighborCellUnits[0] && neighborCellUnits[0].owner !== currentPlayer;

    if (isWorker && hasEnemyUnits) return acc;

    acc[cell.id] = { isInteractive: true };
    return acc;
  }, {});
  
  dispatch(updateCells(dataToUpdate));
};

export default selectUnit;
