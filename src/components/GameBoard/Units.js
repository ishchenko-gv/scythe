import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import styles from './gameMap.module.scss';
import getCellUnits from '../../store/selectors/game-board/map-cells/get-cell-units';
import selectUnit from '../../store/actions/game-board/units/select-unit';
import { getSelectedUnit } from '../../store/selectors/game-board/general';
import WorkerIcon from '../icons/WorkerIcon';
import HeroIcon from '../icons/HeroIcon';

const iconTypes = {
  hero: <HeroIcon />,
  worker: <WorkerIcon />
};

const Units = ({ units, selectedUnit, onUnitSelect }) => {
  return (
    <Fragment>
      {units.map(unit => {
        const unitClasses = cn([styles.unit], {
          [styles['unit--isSelected']]: selectedUnit === unit.id
        });

        return (
          <button
            className={unitClasses}
            key={unit.id}
            onClick={() => onUnitSelect(unit.id)}
          >
            {iconTypes[unit.type]}
          </button>
        );
      })}
    </Fragment>
  );
};

const mapState = (state, ownProps) => ({
  units: getCellUnits(ownProps.cellId)(state),
  selectedUnit: getSelectedUnit(state)
});

const mapDispatch = dispatch => ({
  onUnitSelect: unit => dispatch(selectUnit(unit))
});

export default connect(
  mapState,
  mapDispatch
)(Units);
