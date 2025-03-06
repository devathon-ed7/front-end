import ReactDOM from 'react-dom/client'
import './index.css'
import AppHookContainer from './App-hook-container.tsx';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppHookContainer />
  </StrictMode>,
)
