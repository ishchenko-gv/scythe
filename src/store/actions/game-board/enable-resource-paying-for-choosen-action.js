import { setPhase } from './index';
import { setChoosenAction } from '../players';

const enableResourcePayingForChoosenAction = choosenAction => (
  dispatch,
  getState
) => {
  const state = getState();
  const { currentPlayer } = state.gameBoard;

  dispatch(setPhase('resourcePayment'));
  dispatch(setChoosenAction(currentPlayer, choosenAction));
};

export default enableResourcePayingForChoosenAction;
