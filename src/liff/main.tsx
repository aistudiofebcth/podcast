import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

import '@/styles/globals.css'
import LiffApp from './LiffApp'

ReactDOM.createRoot(document.getElementById('liff-root')!).render(
  <React.StrictMode>
    <LiffApp />
  </React.StrictMode>,
)
