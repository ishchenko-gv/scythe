import * as actionTypes from '../actions/game-board/action-types';

const initialState = {
  currentPlayer: 'nordic',
  phase: 'actionChoose' // movement, producing, battle
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
    default:
      return state;
  }
};

export default gameBoard;
