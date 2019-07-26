import React from 'react';
import { connect } from 'react-redux';

import { setPhase } from '../../store/actions/game-board';

const mapDispatch = dispatch => ({
  onPhaseSet: () => dispatch(setPhase('producing'))
});

const Producing = ({ onPhaseSet }) => {
  return (
    <div>
      <button onClick={onPhaseSet}>Производство</button>
    </div>
  )
}

export default connect(null, mapDispatch)(Producing);