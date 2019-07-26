import { useEffect } from 'react';
import { connect } from 'react-redux';

import updateCellsInteractionForProducing from '../../store/actions/game-map/update-cells-interaction-for-producing';

const mapState = state => ({
  phase: state.gameBoard.phase,
  currentPlayerId: state.gameBoard.currentPlayer
});

const mapDispatch = dispatch => ({
  onCellsDataUpdate: () => dispatch(updateCellsInteractionForProducing())
});

const PhaseObserver = ({ onCellsDataUpdate }) => {
  useEffect(() => {
    onCellsDataUpdate();
  });

  return null;
};

export default connect(
  mapState,
  mapDispatch
)(PhaseObserver);
