import { addResources } from './index';
import { setPhase } from '../general';
import { decrementPoints } from '../../playerTablets';
import { getCurrentPlayer } from '../../../selectors/game-board/general';
import { getCurrentPlayerTablet } from '../../../selectors/player-tablets';

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
