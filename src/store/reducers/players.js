import * as actionTypes from '../actions/players/action-types';

const initialState = {
  nordic: {
    color: 'blue',
    battleCards: [],
    producePoints: 2,
    movementPoints: 2,
    powerPoints: 4,
    money: 5,
    choosenAction: null,
    actions: {
      gainPower: {
        type: 'top',
        section: 0
      },
      modernization: {
        type: 'bottom',
        section: 0,
        cost: { type: 'oil', count: 3 },
        payoff: { type: 'money', count: 3 }
      },
      producing: {
        type: 'top',
        section: 1
      },
      mechDeploy: {
        type: 'bottom',
        section: 1
      },
      movement: {
        type: 'top',
        section: 2
      },
      building: {
        type: 'bottom',
        section: 2
      },
      trading: {
        type: 'top',
        section: 3
      },
      mobilization: {
        type: 'bottom',
        section: 3
      }
    }
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
    case actionTypes.CHOOSEN_ACTION_SET:
      return {
        ...state,
        [action.playerId]: {
          ...state[action.playerId],
          choosenAction: action.choosenAction
        }
      };
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
