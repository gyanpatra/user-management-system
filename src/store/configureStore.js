import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
  return createStore(
    rootReducer,
    initialState,
    //applyMiddleware(thunk)
    composeEnhancers(applyMiddleware(thunk))
  );
}
