import React from 'react';
import { connect } from 'react-redux';

import { getPhase } from '../../store/selectors/game-board/general';
import upgradeAction from '../../store/actions/playerTablets/upgrade-action';
import payForTopAction from '../../store/actions/playerTablets/pay-for-top-action';
import { getIsEnoughResourcesForPayment } from '../../store/selectors/player-tablets';

const EarnPowerPoints = ({
  isModernizationAvailable,
  onActionUpgrade,
  onActionPay,
  isEnoughResourcesForPayment
}) => {
  console.log(isEnoughResourcesForPayment);
  return (
    <>
      <button onClick={onActionPay} disabled={!isEnoughResourcesForPayment}>
        Получить очки вооружения
      </button>
      {isModernizationAvailable && <button onClick={onActionUpgrade}>+</button>}
    </>
  )
};

const mapState = state => ({
  isModernizationAvailable: getPhase(state) === 'modernization',
  isEnoughResourcesForPayment: getIsEnoughResourcesForPayment('earnPowerPoints')(state)
});

const mapDispatch = dispatch => ({
  onActionUpgrade: () => dispatch(upgradeAction('earnPowerPoints')),
  onActionPay: () => dispatch(payForTopAction('earnPowerPoints'))
});

export default connect(mapState, mapDispatch)(EarnPowerPoints);
