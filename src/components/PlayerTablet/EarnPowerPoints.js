import React from 'react';
import { connect } from 'react-redux';

import { getPhase } from '../../store/selectors/game-board/general';
import upgradeAction from '../../store/actions/playerTablets/upgrade-action';

const EarnPowerPoints = ({ isModernizationAvailable, onActionUpgrade }) => {
  return (
    <>
      <button>Получить очки вооружения</button>
      {isModernizationAvailable && <button onClick={onActionUpgrade}>+</button>}
    </>
  )
};

const mapState = state => ({
  isModernizationAvailable: getPhase(state) === 'modernization'
});

const mapDispatch = dispatch => ({
  onActionUpgrade: () => dispatch(upgradeAction('earnPowerPoints'))
});

export default connect(mapState, mapDispatch)(EarnPowerPoints);
