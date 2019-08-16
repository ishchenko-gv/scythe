import { createSelector } from 'reselect';
import getPhase from './get-phase';

/**
 * Check if the player can complete the move
 *
 * @param {string} phase
 *
 * @return {boolean}
 */
const getIsEndOfTurnAvailable = phase =>
  ['topActionComplete', 'endOfTurn'].includes(phase);

export default createSelector(
  getPhase,
  getIsEndOfTurnAvailable
);
