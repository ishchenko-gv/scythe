export default function getPlayerActionCost(state) {
  const { currentPlayer } = state.gameBoard;
  const { choosenAction } = state.players[currentPlayer];

  return (
    state.players[currentPlayer].actions[choosenAction] &&
    state.players[currentPlayer].actions[choosenAction].cost &&
    state.players[currentPlayer].actions[choosenAction].cost.type
  );
}
