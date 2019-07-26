import { updateCells, resetCellsInteractivity, setSelectedUnit } from './index';

const selectUnit = (cellId, unitIndex) => (dispatch, getState) => {
  const state = getState();
  const { phase } = state.gameBoard;

  if (phase !== 'movement') return;

  dispatch(resetCellsInteractivity());
  dispatch(
    setSelectedUnit({
      cellId,
      index: unitIndex
    })
  );
  const { cells } = state.gameMap;
  const neigborCells = cells[cellId].neighborCells;
  const dataToUpdate = neigborCells.reduce((acc, id) => {
    acc[id] = { isInteractive: true };
    return acc;
  }, {});
  dispatch(updateCells(dataToUpdate));
};

export default selectUnit;
