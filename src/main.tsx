import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';

createRoot(document.getElementById('render-react')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
