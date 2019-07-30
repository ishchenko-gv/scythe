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
