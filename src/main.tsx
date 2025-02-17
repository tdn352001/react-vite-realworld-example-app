import { configureAxios } from '@optimai-network-dev/node-api-service'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

configureAxios({
  baseURL: 'https://api.optimai.network',
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
