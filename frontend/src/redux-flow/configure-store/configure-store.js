import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

export const history = createBrowserHistory();

export default ({ initialState } = {}) => {
  const enhancer = compose(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history)),
    logger()
  );
  return createStore(
    connectRouter(history)(rootReducer),
    initialState,
    enhancer
  );
};

const logger = () =>
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : x => x;
