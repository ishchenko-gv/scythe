import { decrementProducePoints } from '../../playerTablets';
import { addResource } from './index';
import { getCurrentPlayer } from '../../../selectors/game-board/general';
import { getMapCells } from '../../../selectors/game-board/map-cells';
import { getUnits } from '../../../selectors/game-board/units';
import { getPlayerTablets } from '../../../selectors/player-tablets';

const produceResources = cellId => (dispatch, getState) => {
  const state = getState();
  const currentPlayer = getCurrentPlayer(state);
  const playerTablets = getPlayerTablets(state);
  const producePoints = playerTablets[currentPlayer].producePoints;
  const units = getUnits(state);

  if (!producePoints) return;

  const cellType = getMapCells(state)[cellId].type;
  const workersCount = Object.keys(units).filter(
    unit => units[unit].location === cellId && units[unit].type === 'worker'
  ).length;
  const producedResource = Array(workersCount).fill({
    type: cellType,
    location: cellId
  });

  dispatch(decrementProducePoints(currentPlayer));
  dispatch(addResource(producedResource));
};

export default produceResources;
