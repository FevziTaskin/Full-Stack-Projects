import React from "react";
import ReactDOM from "react-dom";

/*  
Provider keeps track of store which is the global variable of the app, and allows us to access it from
anywhere inside app 
*/
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

/* To be able to handle the async transactions */
import thunk from "redux-thunk";

import { reducers } from "./reducers";

import App from "./App";

import "./index.css";

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
