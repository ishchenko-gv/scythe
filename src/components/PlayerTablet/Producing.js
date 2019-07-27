import React from 'react';
import { connect } from 'react-redux';

import setProducingPhase from '../../store/actions/game-board/set-producing-phase';

const mapDispatch = dispatch => ({
  onPhaseSet: () => dispatch(setProducingPhase())
});

const Producing = ({ onPhaseSet }) => {
  return (
    <div>
      <button onClick={onPhaseSet}>Производство</button>
    </div>
  );
};

export default connect(
  null,
  mapDispatch
)(Producing);
