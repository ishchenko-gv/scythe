import { createStore } from 'redux';
import rootReducer from './reducers';

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  rootReducer,
  {},
  devTool
);