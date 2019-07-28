import { setPhase } from '../game-board';
import { updateCells } from '../game-map';

const setProducingPhase = () => (dispatch, getState) => {
  const state = getState();
  const { currentPlayer } = state.gameBoard;
  const { units } = state;

  const dataForUpdate = Object.keys(units).reduce((acc, id) => {
    const { owner, type, location } = units[id];

    if (owner === currentPlayer && type === 'worker')
      acc[location] = { isInteractive: true };

    return acc;
  }, {});

  dispatch(setPhase('producing'));
  dispatch(updateCells(dataForUpdate));
};

export default setProducingPhase;
