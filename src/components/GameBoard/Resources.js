import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import getAvailableResourcesForPayment from '../../store/selectors/game-board/resources/get-available-resources-for-payment';
import getCellResources from '../../store/selectors/game-board/resources/get-cell-resources';
import payForChosenAction from '../../store/actions/game-board/resources/pay-for-choosen-action';
import getIsAvailableForTrading from '../../store/selectors/game-board/map-cells/get-is-available-for-trading';
import addTradingResource from '../../store/actions/game-board/resources/add-trading-resource';

const types = {
  iron: 'Железо',
  wood: 'Дерево',
  food: 'Еда',
  oil: 'Нефть'
};

const initialResources = { oil: 0, iron: 0, wood: 0, food: 0 };

const Resources = ({
  cellId,
  resources,
  availableResourcesForPayment,
  onChosenActionPay,
  isAvailableForTrading,
  onTradingResourceAdd
}) => (
  <ul>
    {Object.keys({ ...initialResources, ...resources })
      .sort()
      .map(resource => {
        const isAvailableForPayment =
          availableResourcesForPayment &&
          availableResourcesForPayment.types.includes(resource) &&
          availableResourcesForPayment.locations.includes(cellId);

        return (
          <Fragment key={resource}>
            {(resources[resource] || isAvailableForTrading) && (
              <li>
                {types[resource]}: {resources[resource] || 0}
                {isAvailableForTrading && (
                  <button
                    onClick={() =>
                      onTradingResourceAdd([
                        { type: resource, location: cellId }
                      ])
                    }
                  >
                    добавить
                  </button>
                )}
              </li>
            )}
            {isAvailableForPayment && (
              <button
                onClick={() =>
                  onChosenActionPay({ type: resource, location: cellId })
                }
              >
                Заплатить
              </button>
            )}
          </Fragment>
        );
      })}
  </ul>
);

const mapState = (state, ownProps) => ({
  resources: getCellResources(ownProps.cellId)(state),
  availableResourcesForPayment: getAvailableResourcesForPayment(state),
  isAvailableForTrading: getIsAvailableForTrading(ownProps.cellId)(state)
});

const mapDispatch = dispatch => ({
  onChosenActionPay: resource => dispatch(payForChosenAction(resource)),
  onTradingResourceAdd: resource => dispatch(addTradingResource(resource))
});

export default connect(
  mapState,
  mapDispatch
)(Resources);
