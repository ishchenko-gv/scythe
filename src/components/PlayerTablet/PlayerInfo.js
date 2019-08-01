import React from 'react';
import { connect } from 'react-redux';

import getCurrentPlayer from '../../store/selectors/game-board/general/get-current-player';
import getPlayerTablets from '../../store/selectors/player-tablets/get-player-tablets';

const PlayerInfo = ({ producePoints, movementPoints, powerPoints, money }) => {
  return (
    <ul>
      <li>Очки производства: {producePoints}</li>
      <li>Очки передвижения: {movementPoints}</li>
      <li>Очки вооружения: {powerPoints}</li>
      <li>Деньги: {money}</li>
    </ul>
  );
};

const mapState = state => {
  const currentPlayer = getCurrentPlayer(state);
  const playerTablets = getPlayerTablets(state);

  return {
    producePoints: playerTablets[currentPlayer].producePoints,
    movementPoints: playerTablets[currentPlayer].movementPoints,
    powerPoints: playerTablets[currentPlayer].powerPoints,
    money: playerTablets[currentPlayer].money
  };
};

export default connect(mapState)(PlayerInfo);
