import { createSelector } from 'reselect';

import getPhase from '../general/get-phase';
import getSelectedUnit from '../general/get-selected-unit';
import getCurrentPlayer from '../general/get-current-player';
import getMapCells from './get-map-cells';
import getUnits from '../units/get-units';

/**
 * Get all available cell ids for movement action
 *
 * @param {string} phase
 * @param {string} currentPlayer
 * @param {string} selectedUnitId
 * @param {array} units
 * @param {array} cells
 *
 * @return {array}
 */
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
  getUnits,
  getMapCells,
  getAvailableCellsForMovement
);
