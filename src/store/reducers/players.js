import * as actionTypes from '../actions/players/action-types';

const initialState = {
  nordic: {
    color: 'blue',
    money: 6,
    battleCards: [],
    tablet: {
      producePoints: 2,
      movementPoints: 2
    }
  },
  rusvet: {
    color: 'red',
    money: 6,
    battleCards: [],
    tablet: {
      producePoints: 2,
      movementPoints: 2
    }
  }
};

const players = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DECREMENT_PRODUCE_POINTS:
      return {
        ...state,
        [action.playerId]: {
          ...state[action.playerId],
          tablet: {
            ...state[action.playerId].tablet,
            producePoints: state[action.playerId].tablet.producePoints - 1
          }
        }
      };
    case actionTypes.DECREMENT_MOVEMENT_POINTS:
      console.log(action);
      return {
        ...state,
        [action.playerId]: {
          ...state[action.playerId],
          tablet: {
            ...state[action.playerId].tablet,
            movementPoints: state[action.playerId].tablet.movementPoints - 1
          }
        }
      };
    default:
      return state;
  }
};

export default players;
