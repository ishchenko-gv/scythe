import React from 'react';
import { connect } from 'react-redux';

import getCellResources from './selectors/get-cell-resources';
import getAvailableResourcesForPayment from '../../store/actions/resources/get-available-resources-for-payment';
import payForChoosenAction from '../../store/actions/resources/pay-for-choosen-action';

const types = {
  iron: 'Железо',
  wood: 'Дерево',
  food: 'Еда',
  oil: 'Нефть'
};

const Resources = ({
  cellId,
  resources,
  availableResourcesForPayment,
  onChoosenActionPay
}) => (
  <ul>
    {Object.keys(resources).map(resource => {
      const isAvailableForPayment =
        availableResourcesForPayment &&
        availableResourcesForPayment.types.includes(resource) &&
        availableResourcesForPayment.locations.includes(cellId);

      return (
        <>
          <li>
            {types[resource]}: {resources[resource]}
          </li>
          {isAvailableForPayment && (
            <button
              onClick={() =>
                onChoosenActionPay({ type: resource, location: cellId })
              }
            >
              Заплатить
            </button>
          )}
        </>
      );
    })}
  </ul>
);

const mapState = (state, ownProps) => ({
  resources: getCellResources(ownProps.cellId)(state),
  availableResourcesForPayment: getAvailableResourcesForPayment(state)
});

const mapDispatch = dispatch => ({
  onChoosenActionPay: resource => dispatch(payForChoosenAction(resource))
});

export default connect(
  mapState,
  mapDispatch
)(Resources);
