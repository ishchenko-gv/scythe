import { combineReducers } from 'redux';

import gameBoard from './game-board';
import gameMap from './game-map';

export default combineReducers({
  gameBoard,
  gameMap
});