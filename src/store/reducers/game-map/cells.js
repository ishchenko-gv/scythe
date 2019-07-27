export default {
  a0: {
    type: 'base',
    resources: [],
    units: [],
    neighborCells: ['b0', 'b1']
  },
  a1: {
    type: 'base',
    owner: 'nordic',
    units: ['hero'],
    resources: [],
    neighborCells: ['b3', 'b4']
  },

  b0: {
    type: 'iron',
    resources: [],
    units: [],
    neighborCells: ['a0', 'b1', 'c0', 'c1']
  },
  b1: {
    type: 'food',
    resources: [],
    units: [],
    neighborCells: ['a0', 'b0', 'b2', 'c1', 'c2']
  },
  b2: {
    type: 'farm',
    resources: [],
    units: [],
    neighborCells: ['b1', 'b3', 'c2', 'c3']
  },
  b3: {
    type: 'wood',
    owner: 'nordic',
    units: ['worker'],
    resources: [],
    neighborCells: ['a1', 'b2', 'b4', 'c3', 'c4']
  },
  b4: {
    type: 'oil',
    owner: 'nordic',
    units: ['worker'],
    resources: [],
    neighborCells: ['a1', 'b3', 'b5', 'c4', 'c5']
  },
  b5: {
    type: 'farm',
    resources: [],
    units: [],
    neighborCells: ['b4', 'c5', 'c6']
  },

  c0: {
    type: 'lake',
    resources: [],
    units: [],
    neighborCells: ['b0', 'c1', 'd0', 'd1']
  },
  c1: {
    type: 'oil',
    resources: [],
    units: [],
    neighborCells: ['b0', 'b1', 'c0', 'c2', 'd1', 'd2']
  },
  c2: {
    type: 'lake',
    resources: [],
    units: [],
    neighborCells: ['b1', 'b2', 'c1', 'c3', 'd2', 'd3']
  },
  c3: {
    type: 'oil',
    resources: [],
    units: [],
    neighborCells: ['b2', 'b3', 'c2', 'c4', 'd3', 'd4']
  },
  c4: {
    type: 'iron',
    resources: [],
    units: [],
    neighborCells: ['b3', 'b4', 'c3', 'c5', 'd4', 'd5']
  },
  c5: {
    type: 'food',
    resources: [],
    units: [],
    neighborCells: ['b4', 'b5', 'c4', 'c6', 'd5', 'd6']
  },
  c6: {
    type: 'food',
    resources: [],
    units: [],
    neighborCells: ['b5', 'c5', 'd6', 'd7']
  },

  d0: {
    type: 'base',
    resources: [],
    units: [],
    neighborCells: ['c0', 'd1', 'e0']
  },
  d1: {
    type: 'wood',
    resources: [],
    units: [],
    neighborCells: ['c0', 'c1', 'd0', 'd2', 'e0', 'e1']
  },
  d2: {
    type: 'iron',
    resources: [],
    units: [],
    neighborCells: ['c1', 'c2', 'd1', 'd3', 'e1', 'e2']
  },
  d3: {
    type: 'wood',
    resources: [],
    units: [],
    neighborCells: ['c2', 'c3', 'd2', 'd4', 'e2', 'e3']
  },
  d4: {
    type: 'lake',
    resources: [],
    units: [],
    neighborCells: ['c3', 'c4', 'd3', 'd5', 'e3', 'e4']
  },
  d5: {
    type: 'iron',
    resources: [],
    units: [],
    neighborCells: ['c4', 'c5', 'd4', 'd6', 'e4', 'e5']
  },
  d6: {
    type: 'farm',
    resources: [],
    units: [],
    neighborCells: ['c5', 'c6', 'd5', 'd7', 'e5', 'e6']
  },
  d7: {
    type: 'base',
    resources: [],
    units: [],
    neighborCells: ['c6', 'd6', 'e6']
  },

  e0: {
    type: 'food',
    resources: [],
    units: [],
    neighborCells: ['d0', 'd1', 'e1', 'f0', 'f1']
  },
  e1: {
    type: 'farm',
    resources: [],
    units: [],
    neighborCells: ['d1', 'd2', 'e0', 'e2', 'f1', 'f2']
  },
  e2: {
    type: 'lake',
    resources: [],
    units: [],
    neighborCells: ['d2', 'd3', 'e1', 'e3', 'f2', 'f3']
  },
  e3: {
    type: 'factory',
    resources: [],
    units: [],
    neighborCells: ['d3', 'd4', 'e2', 'e4', 'f3', 'f4']
  },
  e4: {
    type: 'iron',
    resources: [],
    units: [],
    neighborCells: ['d4', 'd5', 'e3', 'e5', 'f4', 'f5']
  },
  e5: {
    type: 'oil',
    resources: [],
    units: [],
    neighborCells: ['d5', 'd6', 'e4', 'e6', 'f5', 'f6']
  },
  e6: {
    type: 'iron',
    resources: [],
    units: [],
    neighborCells: ['d6', 'd7', 'e5', 'f6']
  },

  f0: {
    type: 'wood',
    resources: [],
    units: []
  },
  f1: {
    type: 'wood',
    resources: [],
    units: []
  },
  f2: {
    type: 'food',
    resources: [],
    units: []
  },
  f3: {
    type: 'oil',
    resources: [],
    units: []
  },
  f4: {
    type: 'lake',
    resources: [],
    units: []
  },
  f5: {
    type: 'farm',
    resources: [],
    units: []
  },
  f6: {
    type: 'lake',
    resources: [],
    units: []
  },

  g0: {
    type: 'iron',
    resources: [],
    units: []
  },
  g1: {
    type: 'farm',
    resources: [],
    units: []
  },
  g2: {
    type: 'farm',
    resources: [],
    units: []
  },
  g3: {
    type: 'oil',
    resources: [],
    units: []
  },
  g4: {
    type: 'wood',
    resources: [],
    units: []
  },
  g5: {
    type: 'iron',
    resources: [],
    units: []
  },
  g6: {
    type: 'oil',
    resources: [],
    units: []
  },

  h0: {
    type: 'base',
    resources: [],
    units: []
  },
  h1: {
    type: 'oil',
    resources: [],
    units: []
  },
  h2: {
    type: 'lake',
    resources: [],
    units: []
  },
  h3: {
    type: 'farm',
    resources: [],
    units: []
  },
  h4: {
    type: 'iron',
    resources: [],
    units: []
  },
  h5: {
    type: 'farm',
    resources: [],
    units: []
  },
  h6: {
    type: 'food',
    resources: [],
    units: []
  },
  h7: {
    type: 'base',
    resources: [],
    units: []
  },

  i0: {
    type: 'base',
    resources: [],
    units: []
  },
  i1: {
    type: 'farm',
    resources: [],
    units: []
  }
};
