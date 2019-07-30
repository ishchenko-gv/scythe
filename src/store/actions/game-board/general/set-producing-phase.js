import { setPhase } from './index';

const setProducingPhase = () => (dispatch, getState) => {
  dispatch(setPhase('producing'));
};

export default setProducingPhase;
