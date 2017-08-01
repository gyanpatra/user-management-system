import { RECEIVE_USERS_LIST, ADD_USERS_SUCCESS,
  REVOKE_USERS_SUCCESS,REINVITE_USERS_SUCCESS } from "../actions";

const INITIAL_STATE = {};

export function usersList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_USERS_LIST:
       return action.payload;
    default:
      return state;
  }
}

export function addUser(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_USERS_SUCCESS:
       return action.payload;
    default:
      return state;
  }
}

export function revokeUser(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REVOKE_USERS_SUCCESS:
       return action.payload;
    default:
      return state;
  }
}

export function reInviteUser(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REINVITE_USERS_SUCCESS:
       return action.payload;
    default:
      return state;
  }
}
