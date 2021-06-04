const SET_USER = 'SET_USER'

const initialState = {
    users: []
}

export default function usersReducer(state = initialState, action){
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state
    }
}

export const setUser = (payload) => ({
    type: SET_USER,
    payload
})

