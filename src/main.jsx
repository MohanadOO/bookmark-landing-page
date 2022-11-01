import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './i18n'

import '@fontsource/rubik'
import '@fontsource/rubik/300.css'
import '@fontsource/rubik/500.css'
import '@fontsource/rubik/600.css'

import '@fontsource/tajawal'
import '@fontsource/tajawal/300.css'
import '@fontsource/tajawal/500.css'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
