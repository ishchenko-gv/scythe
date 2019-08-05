import { createSelector } from 'reselect';
import getPhase from './get-phase';

const getIsEndOfTurnAvailable = phase =>
  ['topActionComplete', 'endOfTurn'].includes(phase);

export default createSelector(
  getPhase,
  getIsEndOfTurnAvailable
);
