import * as actionTypes from '../../actions/game-board/general/action-types';

const initialState = {
  players: ['nordic', 'rusvet'],
  currentPlayer: 'nordic',
  phase: 'actionChoose',
  selectedUnit: null,
  chosenAction: null,
  payedResources: {}
};

const general = (state = initialState, action) => {
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
    case actionTypes.SET_CURRENT_PLAYER: {
      return {
        ...state,
        currentPlayer: action.player
      };
    }
    case actionTypes.SET_CHOSEN_ACTION: {
      return {
        ...state,
        chosenAction: action.action
      };
    }
    default:
      return state;
  }
};

export default general;
