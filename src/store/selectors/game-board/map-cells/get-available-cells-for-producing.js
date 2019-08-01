import { createSelector } from 'reselect';

import getPhase from '../../game-board/general/get-phase';
import getCurrentPlayer from '../../game-board/general/get-current-player';
import getUnits from '../../../selectors/game-board/units/get-units';
import getPlayerProducingPoints from '../../player-tablets/get-player-producing-points';

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
