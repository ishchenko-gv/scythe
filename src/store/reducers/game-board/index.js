import { combineReducers } from 'redux';

import general from './general';
import mapCells from './map-cells';
import resources from './resources';
import units from './units';

export default combineReducers({ general, mapCells, resources, units });
