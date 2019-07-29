import merge from 'lodash/merge';

import * as actionTypes from '../actions/game-map/action-types';
import cells from '../../data/mapCells';

const initialState = {
  activeCells: [],
  cells
};

const gameMap = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CELLS: {
      const updatedCells = Object.keys(action.data).reduce((acc, item) => {
        acc[item] = merge(state.cells[item], action.data[item]);

        return acc;
      }, {});

      return {
        ...state,
        cells: {
          ...state.cells,
          ...updatedCells
        }
      };
    }
    case actionTypes.ACTIVE_CELLS_RESET: {
      return {
        ...state,
        activeCells: []
      };
    }
    case actionTypes.ACTIVE_CELLS_SET: {
      return {
        ...state,
        activeCells: action.cells
      };
    }
    default:
      return state;
  }
};

export default gameMap;
