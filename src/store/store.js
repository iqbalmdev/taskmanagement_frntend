import { legacy_createStore,applyMiddleware,compose } from "redux";
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk";
import logger  from 'redux-logger';
const middleware = [thunk, logger];
const store = legacy_createStore(rootReducer,
    applyMiddleware(...middleware))


export default store;