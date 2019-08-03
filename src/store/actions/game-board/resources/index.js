import * as actionTypes from './actionTypes';

export const addResources = resource => ({
  type: actionTypes.RESOURCES_ADD,
  resource
});

export const removeResource = resource => ({
  type: actionTypes.RESOURCE_REMOVE,
  resource
});
