import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import StoreContextProvider from './components/context/StoreContext.jsx';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </HashRouter>
);
