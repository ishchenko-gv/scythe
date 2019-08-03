import React from 'react';
import { connect } from 'react-redux';

import getPhase from '../../store/selectors/game-board/general/get-phase';
import upgradeAction from '../../store/actions/playerTablets/upgrade-action';
import executePlayerAction from '../../store/actions/playerTablets/execute-player-action';
import getIsEnoughResourcesForPayment from '../../store/selectors/player-tablets/get-is-enough-resources-for-payment';

const TopAction = ({
  isModernizationAvailable,
  onActionUpgrade,
  onActionExecute,
  isAvailable,
  label
}) => (
  <>
    <button onClick={onActionExecute} disabled={!isAvailable}>
      {label}
    </button>
    {isModernizationAvailable && <button onClick={onActionUpgrade}>+</button>}
  </>
);

const mapState = (state, ownProps) => {
  const phase = getPhase(state);

  return {
    isModernizationAvailable: phase === 'modernization',
    isAvailable:
      phase === 'actionChoose' &&
      getIsEnoughResourcesForPayment(ownProps.id)(state)
  };
};

const mapDispatch = (dispatch, ownProps) => ({
  onActionUpgrade: () => dispatch(upgradeAction(ownProps.id)),
  onActionExecute: () => dispatch(executePlayerAction(ownProps.id))
});

export default connect(
  mapState,
  mapDispatch
)(TopAction);
