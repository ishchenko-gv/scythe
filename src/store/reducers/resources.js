import * as actionTypes from '../actions/resources/actionTypes';

const initialState = [];

const resources = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESOURCE_ADD:
      return [...state, ...action.resource];
    default:
      return state;
  }
};

export default resources;
