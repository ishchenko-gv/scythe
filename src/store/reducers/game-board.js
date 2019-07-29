import * as actionTypes from '../actions/game-board/action-types';

const initialState = {
  currentPlayer: 'nordic',
  phase: 'actionChoose',
  selectedUnit: null,
  payedResources: {}
};

const gameBoard = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PHASE:
      return {
        ...state,
        phase: action.phase
      };
    case actionTypes.SELECTED_UNIT_SET: {
      return {
        ...state,
        selectedUnit: action.selectedUnit
      };
    }
    case actionTypes.PAYED_RESOURCE_ADD: {
      return {
        ...state,
        payedResources: {
          ...state.payedResources,
          [action.resource]: state.payedResources[action.resource]
            ? state.payedResources[action.resource] + 1
            : 1
        }
      };
    }
    default:
      return state;
  }
};

export default gameBoard;
