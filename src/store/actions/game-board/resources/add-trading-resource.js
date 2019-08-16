import { addResources } from './index';
import { setPhase } from '../general';
import { decrementPoints } from '../../playerTablets';
import { getCurrentPlayer } from '../../../selectors/game-board/general';
import { getCurrentPlayerTablet } from '../../../selectors/player-tablets';

/**
 * Add resource to map cell during the trading phase
 *
 * @param {object} resource
 *  @prop {string} type
 *  @prop {string} location
 *
 * @return {function}
 */
const addTradingResource = resource => (dispatch, getState) => {
  const state = getState();
  const tablet = getCurrentPlayerTablet(state);
  const { tradingPoints } = tablet;
  const currentPlayer = getCurrentPlayer(state);

  dispatch(addResources(resource));
  dispatch(decrementPoints(currentPlayer, 'tradingPoints'));

  if (tradingPoints === 1) dispatch(setPhase('topActionComplete'));
};

export default addTradingResource;
