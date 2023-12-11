
import UserContextProvider from './contexts/userContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <UserContextProvider>
      <h1>This is miniContext </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
