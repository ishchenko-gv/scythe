import { combineReducers } from 'redux';

import gameBoard from './game-board';
import playerTablets from './player-tablets';

export default combineReducers({
  gameBoard,
  playerTablets
});
