import { createSelector } from 'reselect';

import { getPhase } from '../../../selectors/game-board/general';
import { getUnits } from '../../../selectors/game-board/units';
import { getCurrentPlayer } from '../../../selectors/game-board/general';

const getAvailableCellsForProducing = (phase, units, currentPlayer) => {
  if (phase !== 'producing') return [];

  return Object.keys(units).reduce((acc, id) => {
    const { owner, type, location } = units[id];

    if (owner === currentPlayer && type === 'worker') acc.push(location);

    return acc;
  }, []);
};

export default createSelector(
  getPhase,
  getUnits,
  getCurrentPlayer,
  getAvailableCellsForProducing
);
