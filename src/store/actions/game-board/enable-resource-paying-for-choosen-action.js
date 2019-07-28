import pipe from 'lodash/fp/pipe';

import { setPhase } from './index';
import { setChoosenAction } from '../players';
import { getCurrentPlayer } from '../../selectors/game-board';

const enableResourcePayingForChoosenAction = choosenAction => (
  dispatch,
  getState
) => {
  const currentPlayer = pipe(
    getState,
    getCurrentPlayer
  )();

  dispatch(setPhase('resourcePayment'));
  dispatch(setChoosenAction(currentPlayer, choosenAction));
};

export default enableResourcePayingForChoosenAction;
