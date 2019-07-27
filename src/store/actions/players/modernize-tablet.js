import { setPhase } from '../game-board';

const modernizeTablet = () => (dispatch, getState) {
  const state = getState();

  dispatch(setPhase('modernization'));
}

export default modernizeTablet;
