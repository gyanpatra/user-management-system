import {combineReducers} from "redux";
import { usersList, addUser, reInviteUser, revokeUser } from "./users-list";

const usersManagement = combineReducers({
  usersList,
  addUser,
  revokeUser,
  reInviteUser
});

export default usersManagement;
