import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import * as ServiceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';

import 'react-slideshow-image/dist/styles.css'
import "./scss/style.scss";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>,
      document.getElementById("root"),
);

ServiceWorker.unregister();