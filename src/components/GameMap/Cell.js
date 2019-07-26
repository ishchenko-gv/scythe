import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import styles from './gameMap.module.scss';
import processCell from '../../store/actions/game-map/process-cell';
import selectUnit from '../../store/actions/game-map/select-unit';
import moveUnit from '../../store/actions/game-map/move-unit';

const mapState = (state, ownProps) => ({
  units: state.gameMap.cells[ownProps.id].units,
  resources: state.gameMap.cells[ownProps.id].resources,
  owner: state.gameMap.cells[ownProps.id].owner,
  isInteractive: state.gameMap.cells[ownProps.id].isInteractive
});

const mapDispatch = dispatch => ({
  onCellProcess: id => dispatch(processCell(id)),
  onUnitSelect: unit => dispatch(selectUnit(unit)),
  onUnitMove: id => dispatch(moveUnit(id))
});

const types = {
  lake: 'Озеро',
  iron: 'Железо',
  wood: 'Дерево',
  food: 'Еда',
  farm: 'Ферма',
  oil: 'Нефть',
  base: 'База',
  factory: 'Фабрика'
};

const Cell = ({
  id,
  type,
  units,
  resources,
  owner,
  isInteractive,
  onCellProcess,
  onUnitSelect,
  onUnitMove
}) => {
  const classNames = `${styles.cell} ${styles[`cell__${id}`]} ${
    isInteractive ? styles['cell--isInteractive'] : ''
  }`;

  console.log('cell render');

  const handleResourceClick = useCallback(() => {
    if (!isInteractive) return;
    onCellProcess(id);
  }, [isInteractive, onCellProcess, id]);

  const handleCellClick = useCallback(() => {
    if (!isInteractive) return;
    onUnitMove(id);
  }, [isInteractive, onUnitMove, id]);

  return (
    <div onClick={handleCellClick} className={classNames}>
      <div onClick={handleResourceClick}>{types[type]}</div>
      <br />
      {owner}
      <ul>
        {units &&
          units.map((unit, index) => (
            <li onClick={() => onUnitSelect({ cellId: id, index })}>{unit}</li>
          ))}
      </ul>
      <ul>
        {resources.map(resource => (
          <li>{resource}</li>
        ))}
      </ul>
    </div>
  );
};

export default connect(
  mapState,
  mapDispatch
)(Cell);
