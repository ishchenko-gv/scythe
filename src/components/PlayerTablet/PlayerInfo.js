import React from 'react';
import { connect } from 'react-redux';

const PlayerInfo = ({ producePoints, movementPoints }) => {
  return (
    <ul>
      <li>Очки производства: {producePoints}</li>
      <li>Очки передвижения: {movementPoints}</li>
    </ul>
  );
};

const mapState = state => {
  const { currentPlayer } = state.gameBoard;

  return {
    producePoints: state.players[currentPlayer].tablet.producePoints,
    movementPoints: state.players[currentPlayer].tablet.movementPoints
  };
};

export default connect(mapState)(PlayerInfo);
