import * as actionTypes from '../actions/players/action-types';

const initialState = {
  nordic: {
    color: 'blue',
    battleCards: [],
    producePoints: 2,
    movementPoints: 2,
    powerPoints: 4,
    money: 5
  },
  rusvet: {
    color: 'red',
    battleCards: [],
    producePoints: 2,
    movementPoints: 2,
    powerPoints: 4,
    money: 5
  }
};

const players = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DECREMENT_PRODUCE_POINTS:
      return decrementPoints(state, action, 'producePoints');
    case actionTypes.DECREMENT_MOVEMENT_POINTS:
      return decrementPoints(state, action, 'movementPoints');
    case actionTypes.POWER_POINTS_ADD:
      return addPoints(state, action, 'powerPoints');
    case actionTypes.POWER_POINTS_REMOVE:
      return removePoints(state, action, 'powerPoints');
    case actionTypes.MONEY_ADD:
      return addPoints(state, action, 'money');
    case actionTypes.MONEY_REMOVE:
      return removePoints(state, action, 'money');
    default:
      return state;
  }
};

function addPoints(state, action, pointsType) {
  return {
    ...state,
    [action.playerId]: {
      ...state[action.playerId],
      [pointsType]: state[action.playerId][pointsType] + action.count
    }
  };
}

function removePoints(state, action, pointsType) {
  return {
    ...state,
    [action.playerId]: {
      ...state[action.playerId],
      [pointsType]: state[action.playerId][pointsType] - action.count
    }
  };
}

function decrementPoints(state, action, pointsType) {
  return {
    ...state,
    [action.playerId]: {
      ...state[action.playerId],
      [pointsType]: state[action.playerId][pointsType] - 1
    }
  };
}

export default players;
