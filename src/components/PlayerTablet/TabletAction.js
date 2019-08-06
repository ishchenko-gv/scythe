import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';

import styles from './playerTablet.module.scss';
import getPhase from '../../store/selectors/game-board/general/get-phase';
import upgradeAction from '../../store/actions/playerTablets/upgrade-action';
import executePlayerAction from '../../store/actions/playerTablets/execute-player-action';
import getIsEnoughResourcesForPayment from '../../store/selectors/player-tablets/get-is-enough-resources-for-payment';

const TabletAction = ({
  isSelected,
  isModernizationAvailable,
  onActionUpgrade,
  onActionExecute,
  isAvailable,
  label
}) => {
  const classNames = cn(styles.button, {
    [styles['button--isSelected']]: isSelected
  });

  return (
    <>
      <button
        className={classNames}
        onClick={onActionExecute}
        disabled={!isAvailable}
      >
        {label}
      </button>
      {isModernizationAvailable && <button onClick={onActionUpgrade}>+</button>}
    </>
  );
};

const mapState = (state, ownProps) => {
  const phase = getPhase(state);
  const { type } = ownProps;

  return {
    isModernizationAvailable:
      (type === 'top' && phase === 'modernization') ||
      (type === 'bottom' && phase === 'bottomActionUpgrade'),
    isAvailable:
      (type === 'top' &&
        phase === 'actionChoose' &&
        getIsEnoughResourcesForPayment(ownProps.id)(state)) ||
      (type === 'bottom' &&
        (phase === 'actionChoose' || phase === 'topActionComplete') &&
        getIsEnoughResourcesForPayment(ownProps.id)(state))
  };
};

const mapDispatch = (dispatch, ownProps) => ({
  onActionUpgrade: () => dispatch(upgradeAction(ownProps.id)),
  onActionExecute: () => dispatch(executePlayerAction(ownProps.id))
});

export default connect(
  mapState,
  mapDispatch
)(TabletAction);
