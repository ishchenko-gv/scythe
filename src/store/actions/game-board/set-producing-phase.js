import { updateCells } from '../game-map';
import { setPhase } from '../game-board';

const setProducingPhase = () => (dispatch, getState) => {
  const state = getState();
  const { currentPlayer } = state.gameBoard;
  const { cells } = state.gameMap;

  dispatch(setPhase('producing'));

  const ownerCellIds = Object.keys(cells).filter(
    cell => cells[cell].owner === currentPlayer
  );

  const dataForUpdate = ownerCellIds.reduce((acc, id) => {
    const hasWorkers = cells[id].units.includes('worker');

    if (!hasWorkers) return acc;

    acc[id] = { isInteractive: true };

    return acc;
  }, {});

  dispatch(updateCells(dataForUpdate));
};

export default setProducingPhase;
