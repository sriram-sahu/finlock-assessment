import React from 'react'
import Cookies from 'js-cookie'
import Login from './components/Login'
import Home from './components/Home'

import './App.css'

const App = () => {
  const [isLogin, setLogin] = React.useState('')
  const loginDetails = data => {
    setLogin(data)
  }
  const token = Cookies.get('jwt_token')
  return (
    <div>
      {token === undefined ? (
        <Login loginDetails={loginDetails} />
      ) : (
        <Home loginDetails={loginDetails} />
      )}
    </div>
  )
}

export default App
