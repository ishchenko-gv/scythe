import { getCurrentPlayerActions } from '../../selectors/player-tablets';
import { getCurrentPlayer } from '../../selectors/game-board/general';
import { decrementActionCostCount, incrementActionPayoffCount} from './index';
import { setPhase } from '../game-board/general';

const upgradeAction = actionId => (dispatch, getState) => {
  const state = getState();
  const { type } = getCurrentPlayerActions(state)[actionId];
  const currentPlayer = getCurrentPlayer(state);

  if (type === 'top') {
    dispatch(incrementActionPayoffCount(currentPlayer, actionId));
    dispatch(setPhase('bottomActionUpgrade'));
  }

  if (type === 'bottom') {
    dispatch(decrementActionCostCount(currentPlayer, actionId));
    dispatch(setPhase('endOfTurn'));
  }
};

export default upgradeAction;
