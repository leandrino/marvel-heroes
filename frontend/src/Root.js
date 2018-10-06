import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore from "./redux-flow/configure-store";
import { history } from "./redux-flow/configure-store/configure-store";

const store = configureStore();

export default function(props) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>{props.children}</ConnectedRouter>
    </Provider>
  );
}
