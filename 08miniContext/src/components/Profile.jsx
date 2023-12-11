import React, {useContext} from 'react'
import userContext from '../contexts/userContext'

const Profile = () => {
    const {user} = useContext(userContext)

    if (!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile