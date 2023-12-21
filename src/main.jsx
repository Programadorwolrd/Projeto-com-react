import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './globalStyles.js'

// isso é igual a questao de layout estudada em ejs para renderizar
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/> 
    <App />
  </React.StrictMode>,
)

// doidera que se vc olhar ali o globalstyle eo app quando importado eles so fecham e com a barra do lado direito ainda 