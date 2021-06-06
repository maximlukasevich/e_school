import axios from "axios";
import {setUsers} from "./reducer";

export const getUsers = () => {
    try {
        return async (dispatch) => {
            const res = await axios.get('http://localhost:5000/api/users')
            dispatch(setUsers(res.data))
        }
    } catch (e) {
        console.log(e)
    }
}

export const getClassStudents = (className) => {
    try {
        return async (dispatch) => {
            const res = await axios.get(`http://localhost:5000/api/classes/${className}/students`)
            dispatch(setUsers(res.data))
        }
    } catch (e) {
        console.log(e)
    }
}