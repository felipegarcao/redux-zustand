import { Provider as ReduxProvider } from 'react-redux'
import './styles/global.css'

import { Player } from './pages/Player'
import { store } from './store'

function App() {

  return (
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>
  )
}

export default App
