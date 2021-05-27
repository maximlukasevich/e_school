const SET_USER = 'SET_USER'
const LOGOUT = 'LOGOUT'

const initialState = {
    user: {},
    isAuth: false
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
        case LOGOUT:
            return {
                ...state,
                user: {},
                isAuth: false
            }
        default:
            return state
    }
}

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

export const logOut = () => ({
    type: LOGOUT
})


