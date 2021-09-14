import React from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main.jsx'
import { useGlobalContext } from './context'

function App() {
  const { isMobileView } = useGlobalContext()

  return (
    <div className="App">
      <Header />
      <Main />
      {isMobileView && <Footer />}
    </div>
  )
}

export default App
