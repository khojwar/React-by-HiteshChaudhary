import React, { useState, useContext } from "react";
import userContext from "./userContext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    return (
        <userContext.Provider value={{user, setUser}}> {/* value is an object */}
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider;


// note: now we can use the userContextProvider in App.jsx