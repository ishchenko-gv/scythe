import * as actionTypes from '../actions/playerTablets/action-types';
import tablets from '../../data/tablets';

const initialState = {
  nordic: {
    battleCards: [],
    producingPoints: 0,
    movementPoints: 0,
    powerPoints: 4,
    reputationPoints: 3,
    tradingPoints: 0,
    money: 5,
    previousTurnAction: null,
    actions: tablets[0]
  },
  rusvet: {
    battleCards: [],
    producingPoints: 0,
    movementPoints: 0,
    powerPoints: 4,
    reputationPoints: 3,
    tradingPoints: 0,
    money: 5,
    previousTurnAction: null,
    actions: tablets[0]
  }
};

const playerTablets = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POINTS:
      return addPoints(state, action);
    case actionTypes.REMOVE_POINTS:
      return removePoints(state, action);
    case actionTypes.DECREMENT_POINTS:
      return decrementPoints(state, action);
    case actionTypes.ADD_BATTLE_CARD:
      return {
        ...state,
        [action.playerId]: {
          ...state[action.playerId],
          battleCards: [
            ...state[action.playerId].battleCards,
            action.powerPoints
          ]
        }
      };
    case actionTypes.INCREMENT_ACTION_PAYOFF_COUNT:
      return {
        ...state,
        [action.playerId]: {
          ...state[action.playerId],
          actions: {
            ...state[action.playerId].actions,
            [action.actionId]: {
              ...state[action.playerId].actions[action.actionId],
              payOff: {
                ...state[action.playerId].actions[action.actionId].payOff,
                count:
                  state[action.playerId].actions[action.actionId].payOff.count +
                  1
              }
            }
          }
        }
      };
    case actionTypes.DECREMENT_ACTION_COST_COUNT:
      return {
        ...state,
        [action.playerId]: {
          ...state[action.playerId],
          actions: {
            ...state[action.playerId].actions,
            [action.actionId]: {
              ...state[action.playerId].actions[action.actionId],
              cost: {
                ...state[action.playerId].actions[action.actionId].cost,
                count:
                  state[action.playerId].actions[action.actionId].cost.count - 1
              }
            }
          }
        }
      };
    case actionTypes.SET_PREVIOUS_TURN_PLAYER_ACTION:
      return {
        ...state,
        [action.playerId]: {
          ...state[action.playerId],
          previousTurnAction: action.action
        }
      };
    default:
      return state;
  }
};

function addPoints(state, action) {
  return {
    ...state,
    [action.playerId]: {
      ...state[action.playerId],
      [action.pointsType]:
        state[action.playerId][action.pointsType] + action.count
    }
  };
}

function removePoints(state, action) {
  return {
    ...state,
    [action.playerId]: {
      ...state[action.playerId],
      [action.pointsType]:
        state[action.playerId][action.pointsType] - action.count
    }
  };
}

function decrementPoints(state, action) {
  return {
    ...state,
    [action.playerId]: {
      ...state[action.playerId],
      [action.pointsType]: state[action.playerId][action.pointsType] - 1
    }
  };
}

export default playerTablets;
