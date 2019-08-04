import React from 'react';
import { connect } from 'react-redux';

import styles from './gameMap.module.scss';
import produceResources from '../../store/actions/game-board/resources/produce-resources';
import moveUnit from '../../store/actions/game-board/units/move-unit';
import Units from './Units';
import Resources from './Resources';
import getAvailableCellsForMovement from '../../store/selectors/game-board/map-cells/get-available-cells-for-movement';
import getAvailableCellsForProducing from '../../store/selectors/game-board/map-cells/get-available-cells-for-producing';
import OilBarrelIcon from '../icons/OilBarrelIcon';
import WoodIcon from '../icons/WoodIcon';
import IronIcon from '../icons/IronIcon';
import FarmIcon from '../icons/FarmIcon';

const types = {
  lake: 'Озеро',
  mountains: <IronIcon />,
  forest: <WoodIcon />,
  farm: <FarmIcon />,
  village: 'Деревня',
  tundra: <OilBarrelIcon />,
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
  const classNames = `${styles.cell} ${styles[`cell__${id}`]}`;

  return (
    <div className={classNames}>
      <div>
        {isAvailableForProducing && (
          <button onClick={() => onResourcesProduce(id)}>{types[type]}</button>
        )}
        {!isAvailableForProducing && types[type]}
      </div>
      <br />
      <Units cellId={id} />
      <Resources cellId={id} />
      {isAvailableForMovement && (
        <button
          className={styles.movementButton}
          onClick={() => onUnitMove(id)}
        />
      )}
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
