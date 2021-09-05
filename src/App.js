import Header from './components/Header/Header.jsx'
import { useMediaQuery } from '@material-ui/core'

import { MOBILE_VIEW_BREAKPOINT } from './components/sharedComponents/sharedComponents'
import MobileFooter from './components/Sidebar/MobileFooter'

function App() {
  const isMobileView = useMediaQuery(`(max-width: ${MOBILE_VIEW_BREAKPOINT})`)
  return (
    <div className="App">
      <Header />

      {isMobileView && <MobileFooter />}
    </div>
  )
}

export default App
