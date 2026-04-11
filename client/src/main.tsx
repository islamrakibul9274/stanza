import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // <--- CRITICAL: This connects your CSS to the app
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)