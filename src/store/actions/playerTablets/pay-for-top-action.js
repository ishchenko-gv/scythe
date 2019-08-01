import { addPowerPoints, removeMoney } from './index';
import { getCurrentPlayerTablet } from '../../selectors/player-tablets';
import { getCurrentPlayer } from '../../selectors/game-board/general';

const payForTopAction = actionId => (dispatch, getState) => {
  const state = getState();
  const currentPlayer = getCurrentPlayer(state);
  const tablet = getCurrentPlayerTablet(state);
  const { cost, payOff } = tablet.actions[actionId];

  console.log(cost, payOff);

  dispatch(addPowerPoints(currentPlayer, payOff.count));
  dispatch(removeMoney(currentPlayer, cost.count));
};

export default payForTopAction;
