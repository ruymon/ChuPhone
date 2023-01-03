import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { PlayStoreContextProvider } from './contexts/PlayStoreContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PlayStoreContextProvider>
      <App />
    </PlayStoreContextProvider>
  </React.StrictMode>,
)
