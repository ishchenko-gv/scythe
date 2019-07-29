import { setPhase } from '../game-board';
import { setActiveCells } from '../game-map';
import { getCurrentPlayer } from '../../selectors/game-board';

const setProducingPhase = () => (dispatch, getState) => {
  const state = getState();
  const currentPlayer = getCurrentPlayer(state);
  const { units } = state;

  const activeCells = Object.keys(units).reduce((acc, id) => {
    const { owner, type, location } = units[id];

    if (owner === currentPlayer && type === 'worker') acc.push(location);

    return acc;
  }, []);

  dispatch(setPhase('producing'));
  dispatch(setActiveCells(activeCells));
};

export default setProducingPhase;
