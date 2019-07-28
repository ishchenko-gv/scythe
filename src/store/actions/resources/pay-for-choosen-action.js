import { addPayedResource, setPhase } from '../game-board';
import { removeResource } from './index';

const payForChoosenAction = resource => (dispatch, getState) => {
  const state = getState();
  const { currentPlayer, payedResources } = state.gameBoard;
  const { choosenAction } = state.players[currentPlayer];
  const requiredResources = choosenAction
    ? state.players[currentPlayer].actions[choosenAction].cost
    : {};

  dispatch(addPayedResource(resource.type));
  dispatch(removeResource(resource));
  if (requiredResources.count - payedResources[requiredResources.type] === 1)
    dispatch(setPhase(choosenAction));
};

export default payForChoosenAction;
