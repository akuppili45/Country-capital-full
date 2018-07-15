import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunkMiddleWare from "redux-thunk";
import { createLogger } from 'redux-logger'; 
const loggerMiddleware = createLogger();
export function configureStore() {
  const store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleWare, loggerMiddleware));
  return store;
}

export default configureStore;
