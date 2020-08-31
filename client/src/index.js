import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import * as ServiceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import { tempSetUser, check } from './modules/user';

import 'react-slideshow-image/dist/styles.css'
import "./scss/style.scss";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function loadUser() {
  try{
    const user = localStorage.getItem('user');
    if (!user) return; // 로그인 상태 아닐 시 아무것도 안함

    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  } catch(e) {
    console.log('localStorage is not working..');
  }
};

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>,
      document.getElementById("root"),
);

ServiceWorker.unregister();