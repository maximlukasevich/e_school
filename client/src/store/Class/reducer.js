const SET_CLASSES = 'SET_CLASSES'

const initialState = {
    classes: []
}

export default function classReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CLASSES:
            return {
                ...state,
                classes: [...state.classes, action.payload]
            }
        default:
            return state
    }
}

export const setClasses = (classes) => ({
    type: SET_CLASSES,
    payload: classes
})