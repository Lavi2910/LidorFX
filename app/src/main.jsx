import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Direction } from 'radix-ui'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Direction.Provider dir="rtl">
      <App />
    </Direction.Provider>
  </StrictMode>,
)
