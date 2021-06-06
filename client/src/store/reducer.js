import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import userReducer from "./CurrentUser/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import classReducer from "./Class/reducer";
import usersReducer from "./Users/reducer";
import lessonsReducer from "./Lessons/reducer";

const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    classes: classReducer,
    lessons: lessonsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))