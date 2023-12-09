import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/assets/css/global.css"

import { Provider } from "react-redux";
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import AppLogout from "./utilies/AppLogout";
ReactDOM.render(
  <React.StrictMode>
    <AppLogout>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App  />
      </PersistGate>
    </Provider>
    </AppLogout>
  </React.StrictMode>,
  document.getElementById("root")
);
