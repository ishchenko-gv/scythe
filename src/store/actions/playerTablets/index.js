import * as actionTypes from './action-types';

export const decrementProducePoints = makePointsAction(
  actionTypes.DECREMENT_PRODUCE_POINTS
);
export const decrementMovementPoints = makePointsAction(
  actionTypes.DECREMENT_MOVEMENT_POINTS
);
export const addPowerPoints = makePointsAction(actionTypes.POWER_POINTS_ADD);
export const removePowerPoints = makePointsAction(
  actionTypes.POWER_POINTS_REMOVE
);
export const addMoney = makePointsAction(actionTypes.MONEY_ADD);
export const removeMoney = makePointsAction(actionTypes.MONEY_REMOVE);

export const setChoosenAction = (playerId, choosenAction) => ({
  type: actionTypes.CHOOSEN_ACTION_SET,
  playerId,
  choosenAction
});

function makePointsAction(actionType) {
  return (playerId, count) => ({
    type: actionType,
    count: count || null,
    playerId
  });
}