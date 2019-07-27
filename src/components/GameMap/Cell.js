import React from 'react';
import { connect } from 'react-redux';

import styles from './gameMap.module.scss';
import produceResources from '../../store/actions/game-map/produce-resources';
import selectUnit from '../../store/actions/game-map/select-unit';
import moveUnit from '../../store/actions/game-map/move-unit';

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

const mapState = (state, ownProps) => ({
  units: state.gameMap.cells[ownProps.id].units,
  resources: state.gameMap.cells[ownProps.id].resources,
  owner: state.gameMap.cells[ownProps.id].owner,
  isInteractive: state.gameMap.cells[ownProps.id].isInteractive
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
