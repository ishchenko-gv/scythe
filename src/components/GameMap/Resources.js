import React from 'react';
import { connect } from 'react-redux';

import getCellResources from './selectors/get-cell-resources';

const types = {
  iron: 'Железо',
  wood: 'Дерево',
  food: 'Еда',
  oil: 'Нефть'
};

const Resources = ({ resources }) => {
  return (
    <ul>
      {Object.keys(resources).map(resource => (
        <li>
          {types[resource]}: {resources[resource]}
        </li>
      ))}
    </ul>
  );
};

const mapState = (state, ownProps) => ({
  resources: getCellResources(ownProps.cellId)(state)
});

export default connect(mapState)(Resources);
