import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DataLayer from './DataLayer';
import reducer, { intialState } from './reducer';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={intialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);
