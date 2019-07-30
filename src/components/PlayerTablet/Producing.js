import React from 'react';
import { connect } from 'react-redux';

import setProducingPhase from '../../store/actions/game-board/general/set-producing-phase';

const Producing = ({ onPhaseSet }) => {
  return (
    <div>
      <button onClick={onPhaseSet}>Производство</button>
    </div>
  );
};

const mapDispatch = dispatch => ({
  onPhaseSet: () => dispatch(setProducingPhase())
});

export default connect(
  null,
  mapDispatch
)(Producing);
