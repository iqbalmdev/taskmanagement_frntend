import { combineReducers } from "redux";


import {authReducer} from "./auth/authReducer"


const rootReducer = combineReducers({
    authReducer:authReducer
})
export default rootReducer