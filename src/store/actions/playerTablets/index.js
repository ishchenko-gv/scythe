import * as actionTypes from './action-types';

export const addPoints = (playerId, pointsType, count) => ({
  type: actionTypes.ADD_POINTS,
  playerId,
  pointsType,
  count
});

export const removePoints = (playerId, pointsType, count) => ({
  type: actionTypes.REMOVE_POINTS,
  playerId,
  pointsType,
  count
});

export const decrementPoints = (playerId, pointsType) => ({
  type: actionTypes.DECREMENT_POINTS,
  playerId,
  pointsType
});

export const incrementActionPayoffCount = (playerId, actionId) => ({
  type: actionTypes.INCREMENT_ACTION_PAYOFF_COUNT,
  playerId,
  actionId
});

export const decrementActionCostCount = (playerId, actionId) => ({
  type: actionTypes.DECREMENT_ACTION_COST_COUNT,
  playerId,
  actionId
});

export const addBattleCard = (playerId, powerPoints) => ({
  type: actionTypes.ADD_BATTLE_CARD,
  playerId,
  powerPoints
});

export const setPreviousTurnPlayerAction = (playerId, action) => ({
  type: actionTypes.SET_PREVIOUS_TURN_PLAYER_ACTION,
  playerId,
  action
});
