import React from 'react';
import { connect } from 'react-redux';

import styles from './gameMap.module.scss';
import produceResources from '../../store/actions/game-board/resources/produce-resources';
import moveUnit from '../../store/actions/game-board/units/move-unit';
import Units from './Units';
import Resources from './Resources';
import getAvailableCellsForMovement from '../../store/selectors/game-board/map-cells/get-available-cells-for-movement';
import getAvailableCellsForProducing from '../../store/selectors/game-board/map-cells/get-available-cells-for-producing';

const types = {
  lake: 'Озеро',
  mountains: 'Горы',
  forest: 'Лес',
  farm: 'Ферма',
  village: 'Деревня',
  tundra: 'Тундра',
  base: 'База',
  factory: 'Фабрика'
};

const Cell = ({
  id,
  type,
  isAvailableForMovement,
  isAvailableForProducing,
  onResourcesProduce,
  onUnitMove
}) => {
  const handleCellClick = () => {
    if (!isAvailableForMovement) return;

    onUnitMove(id);
  };

  const classNames = `${styles.cell} ${styles[`cell__${id}`]} ${
    isAvailableForMovement ? styles['cell--isInteractive'] : ''
  }`;

  return (
    <div onClick={handleCellClick} className={classNames}>
      <div>
        {types[type]}{' '}
        {isAvailableForProducing && (
          <button onClick={() => onResourcesProduce(id)}>+</button>
        )}
      </div>
      <br />
      <Units cellId={id} />
      <Resources cellId={id} />
    </div>
  );
};

const mapState = (state, ownProps) => ({
  isAvailableForMovement: getAvailableCellsForMovement(state).includes(
    ownProps.id
  ),
  isAvailableForProducing: getAvailableCellsForProducing(state).includes(
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
