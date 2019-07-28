import React from 'react';
import { connect } from 'react-redux';

import enableResourcePayingForChoosenAction from '../../store/actions/game-board/enable-resource-paying-for-choosen-action';

const Modernization = ({ onResourcePayingEnable }) => {
  return <button onClick={onResourcePayingEnable}>Модернизация</button>;
};

const mapDispatch = dispatch => ({
  onResourcePayingEnable: () =>
    dispatch(enableResourcePayingForChoosenAction('modernization'))
});

export default connect(
  null,
  mapDispatch
)(Modernization);
