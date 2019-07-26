import { useEffect } from 'react';
import { connect } from 'react-redux';

import updateCellsData from '../../store/actions/game-map/update-cells-data';

const mapState = state => ({
  phase: state.gameBoard.phase,
  currentPlayerId: state.gameBoard.currentPlayer
});

const mapDispatch = dispatch => ({
  onCellsDataUpdate: () => dispatch(updateCellsData())
})

const PhaseObserver = ({ onCellsDataUpdate }) => {
  useEffect(() => {
    onCellsDataUpdate();
  });

  return null;
};

export default connect(mapState, mapDispatch)(PhaseObserver);