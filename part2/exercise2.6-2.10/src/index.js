import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const contacts = []
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App contacts={contacts} />
  )