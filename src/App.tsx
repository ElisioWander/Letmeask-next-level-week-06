import { BrowserRouter, Route } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'

import { NewRoom } from './pages/NewRoom'
import { Home } from './pages/Home'

function App() {


  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
