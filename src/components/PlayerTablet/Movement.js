import React from 'react';
import { connect } from 'react-redux';

import { setPhase } from '../../store/actions/game-board';

const Movement = ({ onPhaseSet }) => {
  return <button onClick={onPhaseSet}>Передвижение</button>;
};

const mapDispatch = dispatch => ({
  onPhaseSet: () => dispatch(setPhase('movement'))
});

export default connect(
  null,
  mapDispatch
)(Movement);
