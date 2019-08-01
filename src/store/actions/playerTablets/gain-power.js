import { addPowerPoints, removeMoney } from './index';
import { getPlayerTablets } from '../../selectors/player-tablets';
import { getCurrentPlayer } from '../../selectors/game-board/general';

const gainPower = () => (dispatch, getState) => {
  const state = getState();
  const currentPlayer = getCurrentPlayer(state);
  const playerTablet = getPlayerTablets(state);
  const { money } = playerTablet[currentPlayer];

  if (!money) return;

  dispatch(addPowerPoints(currentPlayer, 3));
  dispatch(removeMoney(currentPlayer, 1));
};

export default gainPower;
