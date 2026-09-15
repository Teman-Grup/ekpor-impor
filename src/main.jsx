import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App.jsx'
import './index.css'

// Configure Axios Base URL from environment variables if set (e.g. on Vercel)
const rawApiUrl = import.meta.env.VITE_API_URL
if (rawApiUrl) {
  let cleanUrl = rawApiUrl.trim().replace(/\/+$/, '')
  if (cleanUrl.endsWith('/api')) {
    cleanUrl = cleanUrl.slice(0, -4)
  }
  axios.defaults.baseURL = cleanUrl
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

