import React from 'react';
import { connect } from 'react-redux';

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
  const { currentPlayer } = state.gameBoard;

  return {
    producePoints: state.players[currentPlayer].producePoints,
    movementPoints: state.players[currentPlayer].movementPoints,
    powerPoints: state.players[currentPlayer].powerPoints,
    money: state.players[currentPlayer].money
  };
};

export default connect(mapState)(PlayerInfo);
