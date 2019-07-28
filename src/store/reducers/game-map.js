import merge from 'lodash/merge';

import * as actionTypes from '../actions/game-map/action-types';
import cells from '../../data/mapCells';

const initialState = {
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
    case actionTypes.RESET_CELLS_INTERACTIVITY: {
      const updatedCells = Object.keys(state.cells).reduce((acc, item) => {
        if (!state.cells[item].isInteractive) return acc;

        acc[item] = {
          ...state.cells[item],
          isInteractive: false
        };

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
    default:
      return state;
  }
};

export default gameMap;
