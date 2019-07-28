import { createSelector } from 'reselect';

import getPlayerWorkersLocation from '../units/get-player-workers-location';

export default createSelector(
  state => state.resources,
  getPlayerWorkersLocation,
  state => state.gameBoard.phase,
  state => {
    const { currentPlayer } = state.gameBoard;
    const { choosenAction } = state.players[currentPlayer];

    return (
      state.players[currentPlayer].actions[choosenAction] &&
      state.players[currentPlayer].actions[choosenAction].cost &&
      state.players[currentPlayer].actions[choosenAction].cost.type
    );
  },
  (resources, workersLocation, phase, resourceType) => {
    if (phase !== 'resourcePayment') return null;

    return resources
      .filter(
        resource =>
          workersLocation.includes(resource.location) &&
          resource.type === resourceType
      )
      .reduce(
        (acc, resource) => {
          acc.types.push(resource.type);
          acc.locations.push(resource.location);

          acc.types = [...new Set(acc.types)];
          acc.locations = [...new Set(acc.locations)];

          return acc;
        },
        { types: [], locations: [] }
      );
  }
);
