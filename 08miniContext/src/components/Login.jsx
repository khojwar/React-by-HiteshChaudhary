import React, {useState, useContext} from 'react'
import userContext from '../contexts/userContext'

const Login = () => {
    const {setUser} = useContext(userContext)
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h3>Login</h3>
        <input type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder='username' 
        />
        {" "}
        <input type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
         />
        {" "}
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login