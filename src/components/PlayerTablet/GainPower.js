import React from 'react';
import { connect } from 'react-redux';

import gainPower from '../../store/actions/playerTablets/gain-power';

const GainPower = ({ onPowerGain }) => {
  return <button onClick={onPowerGain}>Усиление</button>;
};

const mapDispatch = dispatch => ({
  onPowerGain: () => dispatch(gainPower())
});

export default connect(
  null,
  mapDispatch
)(GainPower);
