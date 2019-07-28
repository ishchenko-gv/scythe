import React from 'react';
import { connect } from 'react-redux';

import styles from './gameMap.module.scss';
import produceResources from '../../store/actions/game-map/produce-resources';
import selectUnit from '../../store/actions/units/select-unit';
import moveUnit from '../../store/actions/units/move-unit';
import getCellUnits from './selectors/get-cell-units';

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
  isInteractive,
  onUnitSelect,
  onResourcesProduce,
  onUnitMove
}) => {
  const handleResourceClick = () => {
    if (!isInteractive) return;

    onResourcesProduce(id);
  };

  const handleCellClick = () => {
    if (!isInteractive) return;

    onUnitMove(id);
  };

  const classNames = `${styles.cell} ${styles[`cell__${id}`]} ${
    isInteractive ? styles['cell--isInteractive'] : ''
  }`;

  console.log('cell render');
  const owner = units.length ? units[0].owner : null;

  return (
    <div onClick={handleCellClick} className={classNames}>
      <div onClick={handleResourceClick}>{types[type]}</div>
      <br />
      {owner}
      <ul>
        {units.map(unit => (
          <li onClick={() => onUnitSelect(unit.id, id)}>{unit.type}</li>
        ))}
      </ul>
      {/* <ul>
        {resources.map(resource => (
          <li>{resource}</li>
        ))}
      </ul> */}
    </div>
  );
};

const mapState = (state, ownProps) => ({
  resources: state.gameMap.cells[ownProps.id].resources,
  isInteractive: state.gameMap.cells[ownProps.id].isInteractive,
  units: getCellUnits(ownProps.id)(state)
});

const mapDispatch = dispatch => ({
  onResourcesProduce: id => dispatch(produceResources(id)),
  onUnitSelect: unit => dispatch(selectUnit(unit)),
  onUnitMove: id => dispatch(moveUnit(id))
});

export default connect(
  mapState,
  mapDispatch
)(Cell);
