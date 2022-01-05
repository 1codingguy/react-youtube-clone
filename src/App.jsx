import React from 'react'
import Header from './components/Header/Header.jsx'
import MobileFooter from './components/Footer/Footer'
import Main from './components/Main/Main.jsx'
import { useIsMobileView } from './utils/utils'
import './App.css'

function App() {
  const isMobileView = useIsMobileView()

  return (
    <div className="App">
      <Header />
      <Main />
      {isMobileView && <MobileFooter />}
    </div>
  )
}

export default App
