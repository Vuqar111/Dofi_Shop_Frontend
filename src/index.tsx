import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import './App.css';
import App from './App';
import { Provider } from 'react-redux';
import store from "./redux/store";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  </Provider>
);
