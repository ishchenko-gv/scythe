import { updateCells } from './index';

const updateCellsData = () => (dispatch, getState) => {
  const state = getState();
  const { phase, currentPlayer } = state.gameBoard;
  const { cells } = state.gameMap;

  if (phase === 'producing') {
    const ownerCellIds = Object.keys(cells).filter(
      cell => cells[cell].owner === currentPlayer
    );
    const dataForUpdate = ownerCellIds.reduce((acc, id) => {
      console.log(id);
      const hasWorkers = cells[id].units.includes('worker');
      if (!hasWorkers) return acc;

      acc[id] = { isInteractive: true };

      return acc;
    }, {});

    dispatch(updateCells(dataForUpdate));
  }
};

export default updateCellsData;
