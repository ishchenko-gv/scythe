import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import styles from './gameMap.module.scss';

const makeGetCellUnits = () => createSelector(
  state => state.players,
  (state, props) => props.id,
  (players, id) => {
    return Object.keys(players).reduce((acc, player) => {
      const hero = players[player].units.hero;
      const workers = players[player].units.workers;
      const mechs = players[player].units.mechs;

      if (hero.location === id) acc.push({type: 'hero', owner: player});

      workers.forEach(worker => {
        if (worker.location === id) acc.push({type: 'worker', owner: player})
      });

      return acc;
    }, []);
  }
);

const makeMapState = () => {
  const getCellUnits = makeGetCellUnits();
  const mapState = (state, props) => ({
    units: getCellUnits(state, props)
  });

  return mapState;
};

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

const Cell = ({ id, type, units }) => {
  console.log('cell render');
  return (
    <div className={[styles.cell, styles[`cell__${id}`]].join(' ')}>
      {types[type]}
      <ul>
        {units.map(unit => (
          <li>
            {unit.type} {unit.owner}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default connect(makeMapState)(Cell);