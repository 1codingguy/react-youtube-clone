import React from 'react'
import Header from './components/Header/Header.jsx'
import MobileFooter from './components/Footer/Footer'
import Main from './components/Main/Main.jsx'
import { useIsMobileView } from './components/utils/utils'

function App() {
  const isMobileView = useIsMobileView()

  return (
    // need to add overflowY: hidden here otherwise footer position is not correct
    <div className="App" style={{ overflowY: 'hidden' }}>
      <Header />
      <Main />
      {isMobileView && <MobileFooter />}
    </div>
  )
}

export default App
