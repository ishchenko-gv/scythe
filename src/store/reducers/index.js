import { combineReducers } from 'redux';

import gameBoard from './game-board';
import gameMap from './game-map';
import players from './players';
import units from './units';
import resources from './resources';

export default combineReducers({
  gameBoard,
  gameMap,
  players,
  units,
  resources
});
