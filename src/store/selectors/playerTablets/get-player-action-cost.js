import { getCurrentPlayer } from '../../selectors/game-board/general';
import getPlayerTablets from './get-player-tablets';

export default function getPlayerActionCost(state) {
  const currentPlayer = getCurrentPlayer(state);
  const playerTablets = getPlayerTablets(state);
  const { choosenAction } = playerTablets[currentPlayer];

  return (
    playerTablets[currentPlayer].actions[choosenAction] &&
    playerTablets[currentPlayer].actions[choosenAction].cost &&
    playerTablets[currentPlayer].actions[choosenAction].cost.type
  );
}
