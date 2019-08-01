import { setPhase } from './index';

const setProducingPhase = () => dispatch => {
  dispatch(setPhase('producing'));
};

export default setProducingPhase;
