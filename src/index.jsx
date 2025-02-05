import {createRoot} from 'react-dom/client'
import App from './App'
import React from 'react'
import './index.css'

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)