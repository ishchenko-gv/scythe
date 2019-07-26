import deepmerge from 'deepmerge';

import * as actionTypes from '../../actions/game-map/action-types';
import cells from './cells';
import getInteractiveCellIds from './get-interactive-cell-ids';

const initialState = {
  cells,
  selectedUnit: null
};

const gameMap = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CELLS_INTERACTIVITY:
      const interactiveCellIds = getInteractiveCellIds(
        state.cells,
        action.currentPlayerId
      );
      const updatedCells = Object.keys(state.cells).reduce((acc, item) => {
        acc[item] = {
          ...state.cells[item],
          isInteractive: interactiveCellIds.includes(item)
        };

        return acc;
      }, {});

      return {
        ...state,
        cells: updatedCells
      };
    case actionTypes.ADD_RESOURCES:
      return {
        ...state,
        cells: {
          ...state.cells,
          [action.cellId]: {
            ...state.cells[action.cellId],
            resources: [
              ...state.cells[action.cellId].resources,
              ...action.resources
            ]
          }
        }
      };
    case actionTypes.UPDATE_CELLS: {
      const cells = deepmerge(state.cells, action.data);
      return {
        ...state,
        cells
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
        acc[item] = {
          ...state.cells[item],
          isInteractive: false
        };

        return acc;
      }, {});

      return {
        ...state,
        cells: updatedCells
      };
    }
    case actionTypes.REMOVE_UNIT: {
      console.log(action.cellId, state.cells);
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
