import { updateCells } from './index';

const updateCellsInteractionForProducing = () => (dispatch, getState) => {
  const state = getState();
  const { phase, currentPlayer } = state.gameBoard;
  const { cells } = state.gameMap;

  if (phase !== 'producing') return;

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

export default updateCellsInteractionForProducing;
