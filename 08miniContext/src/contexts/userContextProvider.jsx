import React, { useState, useContext } from "react";
import userContext from "./userContext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider;