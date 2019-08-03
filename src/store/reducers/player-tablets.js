import * as actionTypes from '../actions/playerTablets/action-types';

const initialState = {
  nordic: {
    battleCards: [],
    producingPoints: 0,
    movementPoints: 0,
    powerPoints: 4,
    reputationPoints: 3,
    tradingPoints: 0,
    money: 5,
    chosenAction: null,
    previousTurnAction: null,
    actions: {
      earnPowerPoints: {
        type: 'top',
        section: 0,
        upgradePotential: 3,
        cost: { type: 'money', count: 1 },
        payOff: { type: 'powerPoints', count: 2 }
      },
      earnBattleCards: {
        type: 'top',
        section: 0,
        upgradePotential: 2,
        cost: { type: 'money', count: 1 },
        payOff: { type: 'battleCards', count: 1 }
      },
      modernization: {
        type: 'bottom',
        section: 0,
        upgradePotential: 2,
        cost: { type: 'oil', count: 3 },
        payOff: { type: 'money', count: 3 }
      },
      producing: {
        type: 'top',
        section: 1,
        upgradePotential: 3,
        payOff: { type: 'producingPoints', count: 2 }
      },
      mechDeploy: {
        type: 'bottom',
        section: 1,
        upgradePotential: 1,
        cost: { type: 'iron', count: 3 },
        payOff: { type: 'money', count: 2 }
      },
      movement: {
        type: 'top',
        section: 2,
        upgradePotential: 3,
        payOff: { type: 'movementPoints', count: 2 }
      },
      building: {
        type: 'bottom',
        section: 2,
        upgradePotential: 2,
        cost: { type: 'wood', count: 3 },
        payOff: { type: 'money', count: 1 }
      },
      trading: {
        type: 'top',
        section: 3,
        cost: { type: 'money', count: 1 },
        payOff: { type: 'tradingPoints', count: 2 }
      },
      earnReputation: {
        type: 'top',
        section: 3,
        upgradePotential: 2,
        cost: { type: 'money', count: 1 },
        payOff: { type: 'reputationPoints', count: 1 }
      },
      mobilization: {
        type: 'bottom',
        section: 3,
        upgradePotential: 2,
        cost: { type: 'food', count: 4 },
        payOff: { type: 'money', count: 2 }
      }
    }
  },
  rusvet: {
    color: 'red',
    battleCards: [],
    producingPoints: 2,
    movementPoints: 2,
    powerPoints: 4,
    money: 5
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
    case actionTypes.SET_CHOSEN_ACTION:
      return {
        ...state,
        [action.playerId]: {
          ...state[action.playerId],
          chosenAction: action.chosenAction
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
