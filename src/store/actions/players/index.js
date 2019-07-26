import * as actionTypes from './action-types';

export const decrementProducePoints = playerId => ({
  type: actionTypes.DECREMENT_PRODUCE_POINTS,
  playerId
});

export const decrementMovementPoints = playerId => ({
  type: actionTypes.DECREMENT_MOVEMENT_POINTS,
  playerId
});
