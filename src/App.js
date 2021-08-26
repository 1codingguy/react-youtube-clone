import { useMediaQuery } from 'react-responsive'

import DesktopHeader from './components/DesktopHeader/DesktopHeader.jsx'
import Header from './components/MobileHeader/MobileHeader.jsx'

function App() {
  const isMobileView = useMediaQuery({ maxWidth: 428 })

  return (
    <div className="App">{isMobileView ? <Header /> : <DesktopHeader />}</div>
  )
}

export default App
