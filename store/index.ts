import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';
import userDetails from '../screens/Form/duck/reducer';

const rootReducer = combineReducers({
  userDetails,
});

const store = createStore(
  rootReducer,
  /* preloadedState, */ composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
