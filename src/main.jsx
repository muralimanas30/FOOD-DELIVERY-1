import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StoreContextProvider from './context/StoreContext.jsx'
import { BrowserRouter as Browser } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Browser>
    <StoreContextProvider>

    <App />
    </StoreContextProvider>
    </Browser>
  </React.StrictMode>,
)
