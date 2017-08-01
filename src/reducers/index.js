import {combineReducers} from "redux";
import usersManagement from "./user-management-reducer";

const rootReducer = combineReducers({
  usersManagement
});

export default rootReducer;
