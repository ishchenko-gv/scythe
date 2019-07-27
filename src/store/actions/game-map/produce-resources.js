import { decrementProducePoints } from '../../actions/players';
import { updateCells, resetCellsInteractivity } from '../../actions/game-map';

const produceResources = cellId => (dispatch, getState) => {
  const state = getState();
  const playerId = state.gameBoard.currentPlayer;
  const producePoints = state.players[playerId].producePoints;

  if (!producePoints) return;

  const cellType = state.gameMap.cells[cellId].type;
  const workersCount = state.gameMap.cells[cellId].units.filter(
    unit => unit === 'worker'
  ).length;
  const producedResources = Array(workersCount).fill(cellType);
  const dataToUpdate = {
    [cellId]: {
      resources: producedResources
    }
  };

  if (producePoints === 1) dispatch(resetCellsInteractivity());
  dispatch(decrementProducePoints(playerId));
  dispatch(updateCells(dataToUpdate));
};

export default produceResources;
