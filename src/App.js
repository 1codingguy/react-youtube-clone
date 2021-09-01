import { useMediaQuery } from 'react-responsive'

import DesktopHeader from './components/DesktopHeader/DesktopHeader.jsx'
import MobileHeader from './components/MobileHeader/MobileHeader.jsx'

const MOBILE_VIEW_MAX_WIDTH = 428

function App() {
  const isMobileView = useMediaQuery({ maxWidth: MOBILE_VIEW_MAX_WIDTH })

  return (
    <div className="App">{isMobileView ? <MobileHeader /> : <DesktopHeader />}</div>
  )
}

export default App
