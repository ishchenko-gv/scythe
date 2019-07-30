import pipe from 'lodash/fp/pipe';

import { setPhase } from './index';
import { setChoosenAction } from '../../playerTablets';
import { getCurrentPlayer } from '../../../selectors/game-board/general';

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
