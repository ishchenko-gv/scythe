import deepmerge from 'deepmerge';

import * as actionTypes from '../../actions/game-map/action-types';
import cells from './cells';

const initialState = {
  cells,
  selectedUnit: null
};

const gameMap = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CELLS: {
      const updatedCells = Object.keys(action.data).reduce((acc, item) => {
        acc[item] = deepmerge(state.cells[item], action.data[item]);

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
    case actionTypes.SET_SELECTED_UNIT: {
      return {
        ...state,
        selectedUnit: action.selectedUnit
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
    case actionTypes.REMOVE_UNIT: {
      return {
        ...state,
        cells: {
          ...state.cells,
          [action.cellId]: {
            ...state.cells[action.cellId],
            units: state.cells[action.cellId].units.filter(
              (unit, index) => index !== action.unitIndex
            )
          }
        }
      };
    }
    case actionTypes.ADD_UNIT: {
      return {
        ...state,
        cells: {
          ...state.cells,
          [action.cellId]: {
            ...state.cells[action.cellId],
            units: [...state.cells[action.cellId].units, action.unit]
          }
        }
      };
    }
    default:
      return state;
  }
};

export default gameMap;
