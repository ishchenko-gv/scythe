import React from 'react';
import { connect } from 'react-redux';

import enableResourcePayingForChoosenAction
  from '../../store/actions/game-board/general/enable-resource-paying-for-choosen-action';
import { getPhase } from '../../store/selectors/game-board/general';
import upgradeAction from '../../store/actions/playerTablets/upgrade-action';

const Modernization = ({ onResourcePayingEnable, isModernizationAvailable, onActionUpgrade }) => {
  return (
    <>
      <button onClick={onResourcePayingEnable}>Модернизация</button>
      {isModernizationAvailable && <button onClick={onActionUpgrade}>-</button>}
    </>
  );
};

const mapState = state => ({
  isModernizationAvailable: getPhase(state) === 'bottomActionUpgrade'
});

const mapDispatch = dispatch => ({
  onResourcePayingEnable: () =>
    dispatch(enableResourcePayingForChoosenAction('modernization')),
  onActionUpgrade: () => dispatch(upgradeAction('modernization'))
});

export default connect(
  mapState,
  mapDispatch
)(Modernization);
