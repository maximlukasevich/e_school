import {setClasses} from "./reducer";
import axios from "axios";

export const getClassesThunk = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('http://localhost:5000/api/classes')
            dispatch(setClasses(res.data))
        } catch (err) {
            console.log(err)
        }
    }
}
