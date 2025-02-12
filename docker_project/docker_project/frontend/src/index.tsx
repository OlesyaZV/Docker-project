import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HashRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>,
  );
