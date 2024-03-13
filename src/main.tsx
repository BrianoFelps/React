import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Renderizando o app importado acima, é o padrão que geralmente não se muda*/}
    <App />
  </React.StrictMode>,
)