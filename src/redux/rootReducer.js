import { combineReducers } from "redux";
import BatReducer from "./batReducer";
import ballReducer from "./ballReducer";

const rootReducer=combineReducers({
    bat:BatReducer,
    ball:ballReducer
})

export default rootReducer