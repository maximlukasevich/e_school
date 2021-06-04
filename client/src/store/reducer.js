import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import userReducer from "./CurrentUser/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import classReducer from "./Class/reducer";
import usersReducer from "./Users/reducer";

const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    classes: classReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))