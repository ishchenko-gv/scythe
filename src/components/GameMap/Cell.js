import React from 'react';
import { connect } from 'react-redux';

import styles from './gameMap.module.scss';
import produceResources from '../../store/actions/resources/produce-resources';
import moveUnit from '../../store/actions/units/move-unit';
import Units from './Units';
import Resources from './Resources';
import { getAvailableCellsForMovement } from '../../store/selectors/game-map';

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
  isActive,
  isAvailableForMovement,
  onResourcesProduce,
  onUnitMove
}) => {
  const handleResourceClick = () => {
    if (!isActive) return;

    onResourcesProduce(id);
  };

  const handleCellClick = () => {
    if (!isAvailableForMovement) return;

    onUnitMove(id);
  };

  const classNames = `${styles.cell} ${styles[`cell__${id}`]} ${
    isAvailableForMovement ? styles['cell--isInteractive'] : ''
  }`;

  return (
    <div onClick={handleCellClick} className={classNames}>
      <div onClick={handleResourceClick}>{types[type]}</div>
      <br />
      <Units cellId={id} />
      <Resources cellId={id} />
    </div>
  );
};

const mapState = (state, ownProps) => ({
  isActive: state.gameMap.activeCells.includes(ownProps.id),
  isAvailableForMovement: getAvailableCellsForMovement(state).includes(
    ownProps.id
  )
});

const mapDispatch = dispatch => ({
  onResourcesProduce: id => dispatch(produceResources(id)),
  onUnitMove: id => dispatch(moveUnit(id))
});

export default connect(
  mapState,
  mapDispatch
)(Cell);
