import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { conectarAfirebase } from './firebase/config'
import './index.css'

conectarAfirebase ()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
