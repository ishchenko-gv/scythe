import React from 'react';
import { connect } from 'react-redux';

import { getPhase } from '../../store/selectors/game-board/general';

const EarnBattleCards = ({ isModernizationAvailable }) => {
  return (
    <>
      <button>Получить карточки вооружения</button>
      {isModernizationAvailable && <button>+</button>}
    </>
  )
};

const mapState = state => ({
  isModernizationAvailable: getPhase(state) === 'modernization'
});

export default connect(mapState)(EarnBattleCards);
