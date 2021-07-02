import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'

import { NewRoom } from './pages/NewRoom/index'
import { Home } from './pages/Home/index'
import { Room } from './pages/Room/index'
import { AdminRoom } from './pages/AdminRoom/index'

import { GlobalStyles } from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>

        <GlobalStyles />
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
