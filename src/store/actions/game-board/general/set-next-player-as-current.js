import { setCurrentPlayer, setPhase } from '.';
import getNextPlayer from '../../../selectors/game-board/general/get-next-player';

const setNextPlayerAsCurrent = () => (dispatch, getState) => {
  const state = getState();
  const nextPlayer = getNextPlayer(state);

  dispatch(setCurrentPlayer(nextPlayer));
  dispatch(setPhase('actionChoose'));
};

export default setNextPlayerAsCurrent;
