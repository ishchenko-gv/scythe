import React, { PureComponent } from 'react';
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

class Cell extends PureComponent {
  handleResourceClick = () => {
    const { onResourcesProduce, isInteractive, id } = this.props;

    if (!isInteractive) return;

    onResourcesProduce(id);
  };

  handleCellClick = () => {
    const { onUnitMove, isInteractive, id } = this.props;

    if (!isInteractive) return;

    onUnitMove(id);
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.resources === this.props.resources);
  }

  render() {
    const {
      id,
      type,
      units,
      resources,
      owner,
      isInteractive,
      onUnitSelect
    } = this.props;

    const classNames = `${styles.cell} ${styles[`cell__${id}`]} ${
      isInteractive ? styles['cell--isInteractive'] : ''
    }`;

    console.log('cell render');

    return (
      <div onClick={this.handleCellClick} className={classNames}>
        <div onClick={this.handleResourceClick}>{types[type]}</div>
        <br />
        {owner}
        <ul>
          {units &&
            units.map((unit, index) => (
              <li onClick={() => onUnitSelect({ cellId: id, index })}>
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
    );
  }
}

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
