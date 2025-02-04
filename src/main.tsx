import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './i18ln';
import AppHookContainer from './App-hook-container.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppHookContainer />
  </React.StrictMode>,
)
