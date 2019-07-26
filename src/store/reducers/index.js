import { combineReducers } from 'redux';

import gameBoard from './game-board';
import gameMap from './game-map';
import players from './players';

export default combineReducers({
  gameBoard,
  gameMap,
  players
});