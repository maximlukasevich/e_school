import axios from "axios";
import {setLesson} from "./reducer";

export const getLessons = () => {
    try {
         return async (dispatch) => {
             const res = await axios.get('http://localhost:5000/api/lessons')
             dispatch(setLesson(res.data))
         }
    } catch (err) {
        console.log(err)
    }
}

export const getLessonsByClass = (className) => {
    try {
        return async (dispatch) => {
            const res = await axios.get(`http://localhost:5000/api/classes/${className}/lessons`)
            dispatch(setLesson(res.data))
        }
    } catch (err) {
        console.log(err)
    }
}