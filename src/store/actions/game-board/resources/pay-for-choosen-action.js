import { addPayedResource, setPhase } from '../../game-board/general';
import { removeResource } from './index';
import {
  getCurrentPlayer,
  getPayedResources
} from '../../../selectors/game-board/general';
import { getPlayerTablets } from '../../../selectors/player-tablets';

const payForChoosenAction = resource => (dispatch, getState) => {
  const state = getState();
  const currentPlayer = getCurrentPlayer(state);
  const payedResources = getPayedResources(state);
  const playerTablets = getPlayerTablets(state);
  const { choosenAction } = playerTablets[currentPlayer];
  const requiredResources = choosenAction
    ? playerTablets[currentPlayer].actions[choosenAction].cost
    : {};

  dispatch(addPayedResource(resource.type));
  dispatch(removeResource(resource));
  if (requiredResources.count - payedResources[requiredResources.type] === 1)
    dispatch(setPhase(choosenAction));
};

export default payForChoosenAction;
