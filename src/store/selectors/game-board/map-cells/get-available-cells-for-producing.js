import { createSelector } from 'reselect';

import {
  getPhase,
  getCurrentPlayer
} from '../../../selectors/game-board/general';
import { getUnits } from '../../../selectors/game-board/units';
import { getPlayerProducingPoints } from '../../player-tablets';

const getAvailableCellsForProducing = (
  phase,
  producingPoints,
  units,
  currentPlayer
) => {
  if (phase !== 'producing' || !producingPoints) return [];

  return Object.keys(units).reduce((acc, id) => {
    const { owner, type, location } = units[id];

    if (owner === currentPlayer && type === 'worker') acc.push(location);

    return acc;
  }, []);
};

export default createSelector(
  getPhase,
  getPlayerProducingPoints,
  getUnits,
  getCurrentPlayer,
  getAvailableCellsForProducing
);
