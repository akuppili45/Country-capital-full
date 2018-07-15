import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
const composeEnhancers =
  typeof window === "object" &&
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose);
// const loggerMiddleware = createLogger();
// const store = createStore(
//     rootReducer,
//     applyMiddleware(
//       thunkMiddleware, // lets us dispatch() functions
//       loggerMiddleware // neat middleware that logs actions
//     )
//   )
export function configureStore() {
const loggerMiddleware = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    )
  )
  // console.log('store');
  // console.log(store)
  // console.log("middlewares: ")
  // console.log(middlewares)
  return store;
}
export function configureFormStore(){
  const middlewares = [];
  const store = createStore(
    rootReducer,
    // createReducer(),
    {},
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
}

export default configureStore;
