import { decrementPoints } from '../../playerTablets';
import { addResources } from './index';
import { getMapCells } from '../../../selectors/game-board/map-cells';
import { getUnits } from '../../../selectors/game-board/units';
import { setPhase } from '../general';
import { getCurrentPlayer } from '../../../selectors/game-board/general';
import { getCurrentPlayerTablet } from '../../../selectors/player-tablets';

const produceResources = cellId => (dispatch, getState) => {
  const state = getState();
  const tablet = getCurrentPlayerTablet(state);
  const { producingPoints } = tablet;
  const units = getUnits(state);
  const currentPlayer = getCurrentPlayer(state);

  if (!producingPoints) return;

  const cellType = getMapCells(state)[cellId].type;
  const workersCount = Object.keys(units).filter(
    unit => units[unit].location === cellId && units[unit].type === 'worker'
  ).length;
  const producedResource = Array(workersCount).fill({
    type: cellType,
    location: cellId
  });

  dispatch(decrementPoints(currentPlayer, 'producingPoints'));
  dispatch(addResources(producedResource));

  if (producingPoints === 1) dispatch(setPhase('topActionComplete'));
};

export default produceResources;
