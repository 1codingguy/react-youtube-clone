import Header from './components/Header/Header.jsx'
import { useMediaQuery } from '@material-ui/core'

import { MOBILE_VIEW_BREAKPOINT } from './components/utils/utils'
import Footer from './components/Sidebar/Footer'
import Main from './components/Main/Main.jsx'

function App() {
  const isMobileView = useMediaQuery(`(max-width: ${MOBILE_VIEW_BREAKPOINT})`)
  return (
    <div className="App">
      <Header />
      <Main />
      {isMobileView && <Footer />}
    </div>
  )
}

export default App
