import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import userReducer from "./User/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    user: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))