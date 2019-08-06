import { addPoints, removePoints, addBattleCard } from './index';
import { getCurrentPlayerTablet } from '../../selectors/player-tablets';
import { getCurrentPlayer } from '../../selectors/game-board/general';
import { setPhase, setChosenAction } from '../game-board/general';

const executePlayerAction = actionId => (dispatch, getState) => {
  const state = getState();
  const currentPlayer = getCurrentPlayer(state);
  const tablet = getCurrentPlayerTablet(state);
  const { cost, payOff } = tablet.actions[actionId];

  dispatch(setChosenAction(actionId));

  switch (actionId) {
    case 'earnPowerPoints':
    case 'earnReputation':
      dispatch(addPoints(currentPlayer, payOff.type, payOff.count));
      dispatch(removePoints(currentPlayer, cost.type, cost.count));
      dispatch(setPhase('topActionComplete'));
      break;
    case 'earnBattleCards':
      Array(payOff.count)
        .fill(null)
        .forEach(() =>
          dispatch(
            addBattleCard(currentPlayer, Number.parseInt(Math.random() * 12))
          )
        );
      dispatch(removePoints(currentPlayer, cost.type, cost.count));
      dispatch(setPhase('topActionComplete'));
      break;
    case 'movement':
    case 'producing':
      dispatch(addPoints(currentPlayer, payOff.type, payOff.count));
      dispatch(setPhase(actionId));
      break;
    case 'trading':
      dispatch(addPoints(currentPlayer, payOff.type, payOff.count));
      dispatch(removePoints(currentPlayer, cost.type, cost.count));
      dispatch(setPhase(actionId));
      break;
    case 'modernization':
    case 'mechDeploy':
    case 'building':
    case 'mobilization':
      dispatch(setPhase('resourcePayment'));
      dispatch(addPoints(currentPlayer, payOff.type, payOff.count));
      break;
    default:
      break;
  }
};

export default executePlayerAction;
