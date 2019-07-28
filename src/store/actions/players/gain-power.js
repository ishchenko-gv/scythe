import { addPowerPoints, removeMoney } from './index';

const gainPower = () => (dispatch, getState) => {
  const state = getState();
  const { currentPlayer } = state.gameBoard;
  const { money } = state.players[currentPlayer];

  if (!money) return;

  dispatch(addPowerPoints(currentPlayer, 3));
  dispatch(removeMoney(currentPlayer, 1));
};

export default gainPower;
