import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers/rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
const saga = createSagaMiddleware();
const middleware = [thunk, logger, saga];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
saga.run(rootSaga);
export default store;
