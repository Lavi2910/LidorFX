import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { Direction } from 'radix-ui'
import './index.css'
import App from './App.jsx'

const app = (
  <StrictMode>
    <Direction.Provider dir="rtl">
      <App />
    </Direction.Provider>
  </StrictMode>
);
const root = document.getElementById('root');
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
