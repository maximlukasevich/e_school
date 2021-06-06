import {setClasses} from "./reducer";
import axios from "axios";

export const getClassesThunk = () => {
    try {
        return async (dispatch) => {
            const res = await axios.get('http://localhost:5000/api/classes')
            dispatch(setClasses(res.data))
        }
    } catch (err) {
        console.log(err)
    }
}
