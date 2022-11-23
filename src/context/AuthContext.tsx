import { createContext, useReducer } from "react"
import React from "react"



export interface UserState {
    isLoggedIn:     boolean,
    username?:      string,
    favoriteIcon?:  string
}


// Estado inicial

export const authInitialState: UserState = {

    isLoggedIn:     false,
    username:       undefined,
    favoriteIcon:   undefined
}

// interface que expone el context

export interface AuthContextProps {
    userState: UserState,
    signIn: () => void
}

// Crear contexto

export const AuthContext = createContext({} as AuthContextProps)

// Componente de proveedor del estado

interface Props {
    children: React.ReactNode
}

export const AuthProvider = ({children}: Props) =>{

    // const [state, dispatch] = useReducer(first, second, third)

    return (
        <AuthContext.Provider value={{
            userState: authInitialState,
            signIn: ()=> {}
        }}>
            {children}
        </AuthContext.Provider>
    )
}