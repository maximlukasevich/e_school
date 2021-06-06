const SET_LESSONS = 'SET_LESSONS'

const initialState = {
    lessons: []
}

export default function lessonsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LESSONS:
            return {
                ...state,
                lessons: action.lessons
            }
        default:
            return state
    }
}

export const setLesson = (lessons) => ({type: SET_LESSONS, lessons})