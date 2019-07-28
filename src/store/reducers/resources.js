import * as actionTypes from '../actions/resources/actionTypes';

const initialState = [
  {
    type: 'oil',
    location: 'b3'
  },
  {
    type: 'oil',
    location: 'b3'
  },
  {
    type: 'oil',
    location: 'b3'
  },
  {
    type: 'wood',
    location: 'b3'
  },
  {
    type: 'iron',
    location: 'b3'
  },
  {
    type: 'oil',
    location: 'b4'
  },
  {
    type: 'iron',
    location: 'b4'
  },
  {
    type: 'oil',
    location: 'b5'
  },
  {
    type: 'iron',
    location: 'b5'
  }
];

const resources = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESOURCE_ADD:
      return [...state, ...action.resource];
    case actionTypes.RESOURCE_REMOVE:
      const resourceIndex = state.findIndex(
        resource =>
          resource.type === action.resource.type &&
          resource.location === action.resource.location
      );
      return state.filter((_, index) => index !== resourceIndex);
    default:
      return state;
  }
};

export default resources;