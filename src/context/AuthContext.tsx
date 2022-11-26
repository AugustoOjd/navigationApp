import { createContext, useReducer } from "react"
import React from "react"
import { authReducer } from "./authReducer"



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
    signIn: () => void,
    logOut: () => void,
    changeFavoriteIcon: (iconName: string) => void,
    changeUserName: (name: string) => void

}

// Crear contexto

export const AuthContext = createContext({} as AuthContextProps)

// Componente de proveedor del estado

interface Props {
    children: React.ReactNode
}

export const AuthProvider = ({children}: Props) =>{

    const [userState, dispatch] = useReducer(authReducer, authInitialState)


    const signIn = ()=>{
        dispatch({ type: 'signIn' })
    }

    const logOut = () =>{
        dispatch({ type: 'logOut'})
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const changeUserName = ( name: string ) => {
        dispatch({ type: 'changeName', payload: name})
    }

    return (
        <AuthContext.Provider value={{
            userState,
            signIn,
            logOut,
            changeFavoriteIcon,
            changeUserName
        }}>
            {children}
        </AuthContext.Provider>
    )
}