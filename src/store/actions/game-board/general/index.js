import * as actionTypes from './action-types';

export const setPhase = phase => ({
  type: actionTypes.SET_PHASE,
  phase
});

export const setSelectedUnit = selectedUnit => ({
  type: actionTypes.SELECTED_UNIT_SET,
  selectedUnit
});

export const addPayedResource = resource => ({
  type: actionTypes.PAYED_RESOURCE_ADD,
  resource
});

export const setCurrentPlayer = player => ({
  type: actionTypes.SET_CURRENT_PLAYER,
  player
});

export const setChosenAction = action => ({
  type: actionTypes.SET_CHOSEN_ACTION,
  action
});
