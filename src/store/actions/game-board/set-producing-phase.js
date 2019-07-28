import { setPhase } from '../game-board';
import { updateCells } from '../game-map';
import { getCurrentPlayer } from '../../selectors/game-board';

const setProducingPhase = () => (dispatch, getState) => {
  const state = getState();
  const currentPlayer = getCurrentPlayer(state);
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
