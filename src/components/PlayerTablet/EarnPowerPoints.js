import React from 'react';
import { connect } from 'react-redux';

import getPhase from '../../store/selectors/game-board/general/get-phase';
import upgradeAction from '../../store/actions/playerTablets/upgrade-action';
import payForTopAction from '../../store/actions/playerTablets/pay-for-top-action';
import getIsEnoughResourcesForPayment from '../../store/selectors/player-tablets/get-is-enough-resources-for-payment';

const EarnPowerPoints = ({
  isModernizationAvailable,
  onActionUpgrade,
  onActionPay,
  isAvailable
}) => (
  <>
    <button onClick={onActionPay} disabled={!isAvailable}>
      Получить очки вооружения
    </button>
    {isModernizationAvailable && <button onClick={onActionUpgrade}>+</button>}
  </>
);

const mapState = state => {
  const phase = getPhase(state);

  return {
    isModernizationAvailable: phase === 'modernization',
    isAvailable:
      phase === 'actionChoose' &&
      getIsEnoughResourcesForPayment('earnPowerPoints')(state)
  };
};

const mapDispatch = dispatch => ({
  onActionUpgrade: () => dispatch(upgradeAction('earnPowerPoints')),
  onActionPay: () => dispatch(payForTopAction('earnPowerPoints'))
});

export default connect(
  mapState,
  mapDispatch
)(EarnPowerPoints);
