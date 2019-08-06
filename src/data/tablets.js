export default [
  {
    earnPowerPoints: {
      type: 'top',
      section: 0,
      upgradePotential: 3,
      cost: { type: 'money', count: 1 },
      payOff: { type: 'powerPoints', count: 2 }
    },
    earnBattleCards: {
      type: 'top',
      section: 0,
      upgradePotential: 2,
      cost: { type: 'money', count: 1 },
      payOff: { type: 'battleCards', count: 1 }
    },
    modernization: {
      type: 'bottom',
      section: 0,
      upgradePotential: 2,
      cost: { type: 'oil', count: 3 },
      payOff: { type: 'money', count: 3 }
    },
    producing: {
      type: 'top',
      section: 1,
      upgradePotential: 3,
      payOff: { type: 'producingPoints', count: 2 }
    },
    mechDeploy: {
      type: 'bottom',
      section: 1,
      upgradePotential: 1,
      cost: { type: 'iron', count: 3 },
      payOff: { type: 'money', count: 2 }
    },
    movement: {
      type: 'top',
      section: 2,
      upgradePotential: 3,
      payOff: { type: 'movementPoints', count: 2 }
    },
    building: {
      type: 'bottom',
      section: 2,
      upgradePotential: 2,
      cost: { type: 'wood', count: 3 },
      payOff: { type: 'money', count: 1 }
    },
    trading: {
      type: 'top',
      section: 3,
      cost: { type: 'money', count: 1 },
      payOff: { type: 'tradingPoints', count: 2 }
    },
    earnReputation: {
      type: 'top',
      section: 3,
      upgradePotential: 2,
      cost: { type: 'money', count: 1 },
      payOff: { type: 'reputationPoints', count: 1 }
    },
    mobilization: {
      type: 'bottom',
      section: 3,
      upgradePotential: 2,
      cost: { type: 'food', count: 4 },
      payOff: { type: 'money', count: 2 }
    }
  }
];
