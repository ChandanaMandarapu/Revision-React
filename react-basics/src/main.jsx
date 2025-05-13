import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// from one component u can only return one parentelement so we use div for that 

// classname keyword need to be used
// htmlfor
// expressions - {wrapping things around}