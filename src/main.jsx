import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/sora"; // Defaults to weight 400
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
