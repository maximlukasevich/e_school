import {setClasses} from "./reducer";
import axios from "axios";

export const getClassesThunk = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('http://localhost:5000/api/classes')
            for (let item of res.data.classes) {
                dispatch(setClasses(item))
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export const getClass = () => {

}