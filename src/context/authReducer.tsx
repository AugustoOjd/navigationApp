import { UserState } from './AuthContext'

type AuthAction = 
    | { type: 'signIn' }
    | { type: 'logOut'}
    | { type: 'changeFavIcon', payload: string}
    | { type: 'changeName', payload: string}


export const authReducer = (state: UserState, action: AuthAction ): UserState =>{


    switch (action.type) {
        case 'signIn':
            
            return {
                ...state,
                isLoggedIn: true,
                username: 'username-logeado'
            }
            
        case 'logOut':

            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }

        case 'changeFavIcon':

            return{
                ...state,
                favoriteIcon: action.payload
            }

        case 'changeName':
            
            return {
                ...state,
                username: action.payload
            }
        default:
            return state;
    }

}