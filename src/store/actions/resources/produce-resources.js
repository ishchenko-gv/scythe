import { decrementProducePoints } from '../players';
import { resetActiveCells } from '../game-map';
import { addResource } from './index';

const produceResources = cellId => (dispatch, getState) => {
  const state = getState();
  const playerId = state.gameBoard.currentPlayer;
  const producePoints = state.players[playerId].producePoints;
  const { units } = state;

  if (!producePoints) return;

  const cellType = state.gameMap.cells[cellId].type;
  const workersCount = Object.keys(units).filter(
    unit => units[unit].location === cellId && units[unit].type === 'worker'
  ).length;
  const producedResource = Array(workersCount).fill({
    type: cellType,
    location: cellId
  });

  if (producePoints === 1) dispatch(resetActiveCells());
  dispatch(decrementProducePoints(playerId));
  dispatch(addResource(producedResource));
};

export default produceResources;
