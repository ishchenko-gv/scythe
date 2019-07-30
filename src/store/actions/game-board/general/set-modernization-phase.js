import { setPhase } from './index';

const setModernizationPhase = () => (dispatch, getState) => {
  const state = getState();

  dispatch(setPhase('modernization'));
};

export default setModernizationPhase;
