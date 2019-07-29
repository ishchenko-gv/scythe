import { createSelector } from 'reselect';

import { getPhase, getSelectedUnit, getCurrentPlayer } from '../game-board';
import getCells from './get-cells';

const getAvailableCellsForMovement = (
  phase,
  currentPlayer,
  selectedUnitId,
  units,
  cells
) => {
  if (phase !== 'movement' || !selectedUnitId) return [];

  const unit = units[selectedUnitId];
  const { neighborCells } = cells[unit.location];
  const isSelectedUnitWorker = unit.type === 'worker';

  return neighborCells.reduce((acc, cell) => {
    const hasEnemyUnits = Object.keys(units)
      .filter(unit => units[unit].location === cell.id)
      .some(unit => units[unit].owner !== currentPlayer);

    if (isSelectedUnitWorker && hasEnemyUnits) return acc;

    acc.push(cell.id);

    return acc;
  }, []);
};

export default createSelector(
  getPhase,
  getCurrentPlayer,
  getSelectedUnit,
  state => state.units,
  getCells,
  getAvailableCellsForMovement
);
