import React from 'react';
import { connect } from 'react-redux';

import getCellUnits from '../../store/selectors/game-board/map-cells/get-cell-units';
import selectUnit from '../../store/actions/game-board/units/select-unit';

const Units = ({ units, onUnitSelect }) => (
  <ul>
    {units.map(unit => (
      <li onClick={() => onUnitSelect(unit.id)}>{unit.type}</li>
    ))}
  </ul>
);

const mapState = (state, ownProps) => {
  return {
    units: getCellUnits(ownProps.cellId)(state)
  };
};

const mapDispatch = dispatch => ({
  onUnitSelect: unit => dispatch(selectUnit(unit))
});

export default connect(
  mapState,
  mapDispatch
)(Units);
