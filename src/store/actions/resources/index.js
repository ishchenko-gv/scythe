import * as actionTypes from './actionTypes';

export const addResource = resource => ({
  type: actionTypes.RESOURCE_ADD,
  resource
});
