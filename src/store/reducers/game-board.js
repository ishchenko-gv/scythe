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
    default:
      return state;
  }
};

export default gameBoard;
