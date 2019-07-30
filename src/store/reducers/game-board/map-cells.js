import cells from '../../../data/mapCells';

const initialState = cells;

const mapCells = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mapCells;
