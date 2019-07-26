const initialState = {
  nordic: {
    color: 'blue',
    units: {
      hero: {location: 'a1'},
      workers: [{location: 'b3'}, {location: 'b4'}],
      mechs: []
    },
    money: 6,
    battleCards: []
  }
};

const players = (state = initialState, action) => {
  return state;
};

export default players;