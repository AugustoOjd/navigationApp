import { UserState } from './AuthContext'

type AuthAction = { type: 'signIn' }


export const authReducer = (state: UserState, action: AuthAction ): UserState =>{


    switch (action.type) {
        case 'signIn':
            
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username'
            }
    
        default:
            return state;
    }

}