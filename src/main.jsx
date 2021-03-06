import React from 'react';
import ReactDOM from 'react-dom/client';

import RoutesApp from './routes';

import './style/global.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>
)
