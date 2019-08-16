import { decrementPoints } from '../../playerTablets';
import { addResources } from './index';
import { getMapCells } from '../../../selectors/game-board/map-cells';
import { getUnits } from '../../../selectors/game-board/units';
import { setPhase } from '../general';
import { getCurrentPlayer } from '../../../selectors/game-board/general';
import { getCurrentPlayerTablet } from '../../../selectors/player-tablets';

/**
 * Add resource to map cell during producing phase
 * and set the next phase if producing points are over
 *
 * @param {string} cellId
 *
 * @return {function}
 */
const produceResources = cellId => (dispatch, getState) => {
  const state = getState();
  const tablet = getCurrentPlayerTablet(state);
  const { producingPoints } = tablet;
  const units = getUnits(state);
  const currentPlayer = getCurrentPlayer(state);
  const resourceType = getMapCells(state)[cellId].resourceType;

  const workersCount = Object.keys(units).filter(
    unit => units[unit].location === cellId && units[unit].type === 'worker'
  ).length;

  const producedResource = Array(workersCount).fill({
    type: resourceType,
    location: cellId
  });

  dispatch(decrementPoints(currentPlayer, 'producingPoints'));
  dispatch(addResources(producedResource));

  if (producingPoints === 1) dispatch(setPhase('topActionComplete'));
};

export default produceResources;
