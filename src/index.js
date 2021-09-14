import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createGlobalStyle } from 'styled-components'
import { ContextProvider } from './context'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <GlobalStyle />
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
