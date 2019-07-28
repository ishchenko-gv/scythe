import uniqid from 'uniqid';

import * as actionTypes from '../actions/units/actionTypes';

const initialState = {
  [uniqid()]: {
    type: 'hero',
    owner: 'nordic',
    location: 'a1'
  },
  [uniqid()]: {
    type: 'worker',
    owner: 'nordic',
    location: 'b3'
  },
  [uniqid()]: {
    type: 'worker',
    owner: 'nordic',
    location: 'b4'
  },
  [uniqid()]: {
    type: 'hero',
    owner: 'rusvet',
    location: 'd7'
  },
  [uniqid()]: {
    type: 'worker',
    owner: 'rusvet',
    location: 'd6'
  },
  [uniqid()]: {
    type: 'worker',
    owner: 'rusvet',
    location: 'e6'
  }
};

const units = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UNIT_LOCATION_CHANGE:
      return {
        ...state,
        [action.unitId]: {
          ...state[action.unitId],
          location: action.destinationCellId
        }
      };
    default:
      return state;
  }
};

export default units;
