import produceResources from './produce-resources';

const processCell = cellId => (dispatch, getState) => {
  const state = getState();
  const phase = state.gameBoard.phase;

  if (phase === 'producing') dispatch(produceResources(cellId));
};

export default processCell;