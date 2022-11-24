import { combineReducers } from "redux";
import BatReducer from "./batReducer";
import ballReducer from "./ballReducer";
import userReducer from "./userReducer";

const rootReducer=combineReducers({
    bat:BatReducer,
    ball:ballReducer,
    user:userReducer
})

export default rootReducer