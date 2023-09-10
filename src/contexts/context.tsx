import { User } from 'firebase/auth'
import { useState, createContext } from "react";
const Context = createContext(null)

function ContextProvider({children}) {
    //user state
    const [user, setUser] = useState<User | null>(null)
    return(
        <Context.Provider value ={{user, setUser}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}