import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers({
  reducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;
