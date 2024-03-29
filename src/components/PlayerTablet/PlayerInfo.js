import React from 'react';
import { connect } from 'react-redux';

import getCurrentPlayer from '../../store/selectors/game-board/general/get-current-player';
import getPlayerTablets from '../../store/selectors/player-tablets/get-player-tablets';

const PlayerInfo = ({
  producingPoints,
  movementPoints,
  powerPoints,
  money,
  currentPlayer
}) => {
  return (
    <ul>
      <li>Сейчас ходит: {currentPlayer}</li>
      <li>Очки производства: {producingPoints}</li>
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
    producingPoints: playerTablets[currentPlayer].producingPoints,
    movementPoints: playerTablets[currentPlayer].movementPoints,
    powerPoints: playerTablets[currentPlayer].powerPoints,
    money: playerTablets[currentPlayer].money,
    currentPlayer: getCurrentPlayer(state)
  };
};

export default connect(mapState)(PlayerInfo);
