import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Userinfo } from './Pages/Context1.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Userinfo>
    <App />
    </Userinfo>
  </React.StrictMode>,
)
