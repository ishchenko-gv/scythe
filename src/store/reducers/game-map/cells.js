export default {
  a0: {
    type: 'base',
    resources: [],
    units: [],
    neighborCells: [{ id: 'b0' }, { id: 'b1' }]
  },
  a1: {
    type: 'base',
    owner: 'nordic',
    units: ['hero'],
    resources: [],
    neighborCells: [{ id: 'b3' }, { id: 'b4' }]
  },

  b0: {
    type: 'iron',
    resources: [],
    units: [],
    neighborCells: [{ id: 'a0' }, { id: 'b1' }, { id: 'c0' }, { id: 'c1' }]
  },
  b1: {
    type: 'food',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'a0' },
      { id: 'b0' },
      { id: 'b2' },
      { id: 'c1' },
      { id: 'c2' }
    ]
  },
  b2: {
    type: 'farm',
    resources: [],
    units: [],
    neighborCells: [{ id: 'b1' }, { id: 'b3' }, { id: 'c2' }, { id: 'c3' }]
  },
  b3: {
    type: 'wood',
    owner: 'nordic',
    units: ['worker'],
    resources: [],
    neighborCells: [
      { id: 'a1' },
      { id: 'b2' },
      { id: 'b4' },
      { id: 'c3' },
      { id: 'c4' }
    ]
  },
  b4: {
    type: 'oil',
    owner: 'nordic',
    units: ['worker'],
    resources: [],
    neighborCells: [
      { id: 'a1' },
      { id: 'b3' },
      { id: 'b5' },
      { id: 'c4' },
      { id: 'c5' }
    ]
  },
  b5: {
    type: 'farm',
    resources: [],
    units: [],
    neighborCells: [{ id: 'b4' }, { id: 'c5' }, { id: 'c6' }]
  },

  c0: {
    type: 'lake',
    resources: [],
    units: [],
    neighborCells: [{ id: 'b0' }, { id: 'c1' }, { id: 'd0' }, { id: 'd1' }]
  },
  c1: {
    type: 'oil',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'b0' },
      { id: 'b1' },
      { id: 'c0' },
      { id: 'c2' },
      { id: 'd1' },
      { id: 'd2' }
    ]
  },
  c2: {
    type: 'lake',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'b1' },
      { id: 'b2' },
      { id: 'c1' },
      { id: 'c3' },
      { id: 'd2' },
      { id: 'd3' }
    ]
  },
  c3: {
    type: 'oil',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'b2' },
      { id: 'b3' },
      { id: 'c2' },
      { id: 'c4' },
      { id: 'd3' },
      { id: 'd4' }
    ]
  },
  c4: {
    type: 'iron',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'b3' },
      { id: 'b4' },
      { id: 'c3' },
      { id: 'c5' },
      { id: 'd4' },
      { id: 'd5' }
    ]
  },
  c5: {
    type: 'food',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'b4' },
      { id: 'b5' },
      { id: 'c4' },
      { id: 'c6' },
      { id: 'd5' },
      { id: 'd6' }
    ]
  },
  c6: {
    type: 'food',
    resources: [],
    units: [],
    neighborCells: [{ id: 'b5' }, { id: 'c5' }, { id: 'd6' }, { id: 'd7' }]
  },

  d0: {
    type: 'base',
    resources: [],
    units: [],
    neighborCells: [{ id: 'c0' }, { id: 'd1' }, { id: 'e0' }]
  },
  d1: {
    type: 'wood',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'c0' },
      { id: 'c1' },
      { id: 'd0' },
      { id: 'd2' },
      { id: 'e0' },
      { id: 'e1' }
    ]
  },
  d2: {
    type: 'iron',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'c1' },
      { id: 'c2' },
      { id: 'd1' },
      { id: 'd3' },
      { id: 'e1' },
      { id: 'e2' }
    ]
  },
  d3: {
    type: 'wood',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'c2' },
      { id: 'c3' },
      { id: 'd2' },
      { id: 'd4' },
      { id: 'e2' },
      { id: 'e3' }
    ]
  },
  d4: {
    type: 'lake',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'c3' },
      { id: 'c4' },
      { id: 'd3' },
      { id: 'd5' },
      { id: 'e3' },
      { id: 'e4' }
    ]
  },
  d5: {
    type: 'iron',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'c4' },
      { id: 'c5' },
      { id: 'd4' },
      { id: 'd6' },
      { id: 'e4' },
      { id: 'e5' }
    ]
  },
  d6: {
    type: 'farm',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'c5' },
      { id: 'c6' },
      { id: 'd5' },
      { id: 'd7' },
      { id: 'e5' },
      { id: 'e6' }
    ]
  },
  d7: {
    type: 'base',
    resources: [],
    units: [],
    neighborCells: [{ id: 'c6' }, { id: 'd6' }, { id: 'e6' }]
  },

  e0: {
    type: 'food',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'd0' },
      { id: 'd1' },
      { id: 'e1' },
      { id: 'f0' },
      { id: 'f1' }
    ]
  },
  e1: {
    type: 'farm',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'd1' },
      { id: 'd2' },
      { id: 'e0' },
      { id: 'e2' },
      { id: 'f1' },
      { id: 'f2' }
    ]
  },
  e2: {
    type: 'lake',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'd2' },
      { id: 'd3' },
      { id: 'e1' },
      { id: 'e3' },
      { id: 'f2' },
      { id: 'f3' }
    ]
  },
  e3: {
    type: 'factory',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'd3' },
      { id: 'd4' },
      { id: 'e2' },
      { id: 'e4' },
      { id: 'f3' },
      { id: 'f4' }
    ]
  },
  e4: {
    type: 'iron',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'd4' },
      { id: 'd5' },
      { id: 'e3' },
      { id: 'e5' },
      { id: 'f4' },
      { id: 'f5' }
    ]
  },
  e5: {
    type: 'oil',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'd5' },
      { id: 'd6' },
      { id: 'e4' },
      { id: 'e6' },
      { id: 'f5' },
      { id: 'f6' }
    ]
  },
  e6: {
    type: 'iron',
    resources: [],
    units: [],
    neighborCells: [{ id: 'd6' }, { id: 'd7' }, { id: 'e5' }, { id: 'f6' }]
  },

  f0: {
    type: 'wood',
    resources: [],
    units: [],
    neighborCells: [{ id: 'e0' }, { id: 'f1' }, { id: 'g0' }]
  },
  f1: {
    type: 'wood',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'e0' },
      { id: 'e1' },
      { id: 'f0' },
      { id: 'f2' },
      { id: 'g0' },
      { id: 'g1' }
    ]
  },
  f2: {
    type: 'food',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'e1' },
      { id: 'e2' },
      { id: 'f1' },
      { id: 'f3' },
      { id: 'g1' },
      { id: 'g2' }
    ]
  },
  f3: {
    type: 'oil',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'e2' },
      { id: 'e3' },
      { id: 'f2' },
      { id: 'f4' },
      { id: 'g2' },
      { id: 'g3' }
    ]
  },
  f4: {
    type: 'lake',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'e3' },
      { id: 'e4' },
      { id: 'f3' },
      { id: 'f5' },
      { id: 'g3' },
      { id: 'g4' }
    ]
  },
  f5: {
    type: 'farm',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'e4' },
      { id: 'e5' },
      { id: 'f4' },
      { id: 'f6' },
      { id: 'g4' },
      { id: 'g5' }
    ]
  },
  f6: {
    type: 'lake',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'e5' },
      { id: 'e6' },
      { id: 'f6' },
      { id: 'g5' },
      { id: 'g6' }
    ]
  },

  g0: {
    type: 'iron',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'f0' },
      { id: 'f1' },
      { id: 'g1' },
      { id: 'h0' },
      { id: 'h1' }
    ]
  },
  g1: {
    type: 'farm',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'f1' },
      { id: 'f2' },
      { id: 'g0' },
      { id: 'g2' },
      { id: 'h1' },
      { id: 'h2' }
    ]
  },
  g2: {
    type: 'farm',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'f2' },
      { id: 'f3' },
      { id: 'g1' },
      { id: 'g3' },
      { id: 'h2' },
      { id: 'h3' }
    ]
  },
  g3: {
    type: 'oil',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'f3' },
      { id: 'f4' },
      { id: 'g2' },
      { id: 'g4' },
      { id: 'h3' },
      { id: 'h4' }
    ]
  },
  g4: {
    type: 'wood',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'f4' },
      { id: 'f5' },
      { id: 'g3' },
      { id: 'g5' },
      { id: 'h4' },
      { id: 'h5' }
    ]
  },
  g5: {
    type: 'iron',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'f5' },
      { id: 'f6' },
      { id: 'g4' },
      { id: 'g6' },
      { id: 'h5' },
      { id: 'h6' }
    ]
  },
  g6: {
    type: 'oil',
    resources: [],
    units: [],
    neighborCells: [{ id: 'f6' }, { id: 'g5' }, { id: 'h6' }, { id: 'h7' }]
  },

  h0: {
    type: 'base',
    resources: [],
    units: [],
    neighborCells: [{ id: 'g0' }, { id: 'h1' }]
  },
  h1: {
    type: 'oil',
    resources: [],
    units: [],
    neighborCells: [{ id: 'g0' }, { id: 'g1' }, { id: 'h0' }, { id: 'h2' }]
  },
  h2: {
    type: 'lake',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'g1' },
      { id: 'g2' },
      { id: 'h1' },
      { id: 'h3' },
      { id: 'i0' }
    ]
  },
  h3: {
    type: 'farm',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'g2' },
      { id: 'g3' },
      { id: 'h2' },
      { id: 'h4' },
      { id: 'i0' },
      { id: 'i1' }
    ]
  },
  h4: {
    type: 'iron',
    resources: [],
    units: [],
    neighborCells: [
      { id: 'g3' },
      { id: 'g4' },
      { id: 'h3' },
      { id: 'h5' },
      { id: 'i1' }
    ]
  },
  h5: {
    type: 'farm',
    resources: [],
    units: [],
    neighborCells: [{ id: 'g4' }, { id: 'g5' }, { id: 'h4' }, { id: 'h6' }]
  },
  h6: {
    type: 'food',
    resources: [],
    units: [],
    neighborCells: [{ id: 'g5' }, { id: 'g6' }, { id: 'h5' }, { id: 'h7' }]
  },
  h7: {
    type: 'base',
    resources: [],
    units: [],
    neighborCells: [{ id: 'g6' }, { id: 'h6' }]
  },

  i0: {
    type: 'base',
    resources: [],
    units: [],
    neighborCells: [{ id: 'h2' }, { id: 'h3' }, { id: 'i1' }]
  },
  i1: {
    type: 'farm',
    resources: [],
    units: [],
    neighborCells: [{ id: 'h3' }, { id: 'h4' }, { id: 'i0' }]
  }
};
