import { addPayedResource, setPhase } from '../../game-board/general';
import { removeResource } from './index';
import getCurrentPlayer from '../../../selectors/game-board/general/get-current-player';
import getPayedResources from '../../../selectors/game-board/general/get-payed-resources';
import getPlayerTablets from '../../../selectors/player-tablets/get-player-tablets';

/**
 * Remove resource from player's cell, add it to paid resources buffer
 * and set the next phase if the price for the action is paid in full
 *
 * @param {object} resource
 *  @prop {string} type
 *  @prop {string} location
 *
 * @return {function}
 */
const payForChosenAction = resource => (dispatch, getState) => {
  const state = getState();
  const currentPlayer = getCurrentPlayer(state);
  const payedResources = getPayedResources(state);
  const playerTablets = getPlayerTablets(state);
  const { chosenAction } = state.gameBoard.general;
  const requiredResources = chosenAction
    ? playerTablets[currentPlayer].actions[chosenAction].cost
    : {};

  dispatch(addPayedResource(resource.type));
  dispatch(removeResource(resource));
  if (requiredResources.count - payedResources[requiredResources.type] === 1)
    dispatch(setPhase(chosenAction));
};

export default payForChosenAction;
