// AuthLayout -> yo yauta mechanism ho, kasari pages ra routes lai protect garne

// it is a protected container for routes
import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'


export default function Protected({children, authentication=true}) {
  const navigate = useNavigate()
  const authStatus = useSelector(state => state.auth.status)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Main Logic: we navigate to login page if authStatus is false and we navigate to home page if authStatus is true

    // if (authStatus === true) {
    //     navigate('/')
    // } else if (authStatus === false) {
    //     navigate('/login')
    // }

    if (authentication && authStatus !== authentication){
      navigate('/login')
    } else if (!authentication && authStatus !== authentication) {
      navigate('/')

    }
    setLoading(false)
  }, [authStatus, authentication, navigate])

  return loading ? <div>Loading...</div> : <>{children}</>
}

