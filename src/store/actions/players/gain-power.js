import { addPowerPoints, removeMoney } from './index';

const gainPower = () => (dispatch, getState) => {
  const state = getState();
  const { currentPlayer } = state.gameBoard;
  const { money } = state.players[currentPlayer];

  if (!money) return;

  dispatch(addPowerPoints(3, currentPlayer));
  dispatch(removeMoney(1, currentPlayer));
};

export default gainPower;
