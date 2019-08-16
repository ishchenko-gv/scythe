import { setCurrentPlayer, setPhase, setChosenAction } from '.';
import getNextPlayer from '../../../selectors/game-board/general/get-next-player';
import { getCurrentPlayer } from '../../../selectors/game-board/general';
import { setPreviousTurnPlayerAction } from '../../playerTablets';

/**
 * Transfer control to the next player
 *
 * @return {function}
 */
const setNextPlayerAsCurrent = () => (dispatch, getState) => {
  const state = getState();
  const currentPlayer = getCurrentPlayer(state);
  const nextPlayer = getNextPlayer(state);
  const { chosenAction } = state.gameBoard.general;

  dispatch(setCurrentPlayer(nextPlayer));
  dispatch(setPhase('actionChoose'));
  dispatch(setPreviousTurnPlayerAction(currentPlayer, chosenAction));
  dispatch(setChosenAction(null));
};

export default setNextPlayerAsCurrent;
