import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import './index.css';
import Scoreboard from './containers/Scoreboard';
import * as serviceWorker from './serviceWorker';
import PlayerReducer from './reducers/player';

const store = createStore(
  PlayerReducer,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Scoreboard />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
