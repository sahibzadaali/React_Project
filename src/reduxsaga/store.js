import createSagaMiddleware from "redux-saga";
import rootSagas from "../sagas/rootSagas";
import reducers from './reducers/index';
import { createStore,compose,applyMiddleware } from "redux";

const sagaMiddleware = createSagaMiddleware();
const middleware =[sagaMiddleware]

const store=compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())(createStore)(reducers);

sagaMiddleware.run(rootSagas);
export default store;