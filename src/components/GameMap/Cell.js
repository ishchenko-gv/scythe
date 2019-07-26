import React from 'react';
import { connect } from 'react-redux';

import styles from './gameMap.module.scss';
import processCell from '../../store/actions/game-map/process-cell';

const mapState = (state, ownProps) => ({
  units: state.gameMap.cells[ownProps.id].units, 
  resources: state.gameMap.cells[ownProps.id].resources,
  owner: state.gameMap.cells[ownProps.id].owner,
  isInteractive: state.gameMap.cells[ownProps.id].isInteractive
});

const mapDispatch = dispatch => ({
  onCellProcess: id => dispatch(processCell(id))
})

const types = {
  lake: 'Озеро',
  iron: 'Железо',
  wood: 'Дерево',
  food: 'Еда',
  farm: 'Ферма',
  oil: 'Нефть',
  base: 'База',
  factory: 'Фабрика'
}

const Cell = ({ id, type, units, resources, owner, isInteractive, onCellProcess }) => {
  const classNames = `${styles.cell} ${styles[`cell__${id}`]} ${isInteractive ? styles['cell--isInteractive'] : ''}`;

  return (
    <div onClick={() => onCellProcess(id)} className={classNames}>
      {types[type]}<br />
      {owner}
      <ul>
        {units && units.map(unit => (
          <li>
            {unit}
          </li>
        ))}
      </ul>
      <ul>
        {resources.map(resource => (
          <li>{resource}</li>
        ))}
      </ul>
    </div>
  )
}

export default connect(mapState, mapDispatch)(Cell);