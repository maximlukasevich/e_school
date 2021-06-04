import axios from "axios";
import {setUser} from "./reducer";

export const getUsers = () => {
    try {
        return async (dispatch) => {
            const res = await axios.get('http://localhost:5000/api/users')
            for (let item of res.data.users) {
                dispatch(setUser(item))
            }
        }
    } catch (e) {
        console.log(e)
    }
}