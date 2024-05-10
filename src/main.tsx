import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'animate.css';
import 'react-loading-skeleton/dist/skeleton.css';
import './global.css';
import { Provider } from 'react-redux';
import { store } from './Redux/Stores/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
