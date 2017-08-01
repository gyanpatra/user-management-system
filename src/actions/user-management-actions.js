
const API_HOST_ROOT = "http://dev.walmart.com:3001/api";
export const RECEIVE_USERS_LIST = "RECEIVE_USERS_LIST";
export const ADD_USERS_SUCCESS = "ADD_USERS_SUCCESS";
export const ADD_USERS_FAILURE = "ADD_USERS_FAILURE";
export const REVOKE_USERS_SUCCESS = "REVOKE_USERS_SUCCESS";
export const REVOKE_USERS_FAILURE = "REVOKE_USERS_FAILURE";
export const REINVITE_USERS_SUCCESS = "REINVITE_USERS_SUCCESS";
export const REINVITE_USERS_FAILURE = "REINVITE_USERS_FAILURE";


export const receiveUsersList = (json) => {
  return {
   type: RECEIVE_USERS_LIST,
   payload: json.users
 };
}
export const getUserslist = () => (dispatch) => {
  const url = `${API_HOST_ROOT}/users/list`;
  console.log("About to fetch from API")
   const translate = (response) => response;
   const options = {};
    return fetch(url, options, translate).then((res) => {
       return res.json();
    }).then(
    (responseJSON) => dispatch(receiveUsersList(responseJSON))
  ).catch((err) => {
    console.log("Error During retrieving users list",err)
  });
}


export const handleSuccefullyAddedUsers= (json) => {

  return {
   type: ADD_USERS_SUCCESS,
   payload: json.message
 };
}

export const addUsers = (formData) => (dispatch) => {
  const url = `${API_HOST_ROOT}/users/add`;
  console.log("About to call api for adding useers");
  const translate = (response) => response;
  const apiData = {};
  apiData.emailIds = formData.emailIds.split(",");
  apiData.role = formData.role;
  console.log("apiData sent to adduserss api ",JSON.stringify(apiData))
  const options = {
    method: "post",
    body: JSON.stringify(apiData),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  };
  return fetch(url, options, translate).then((res) => {
     return res.json();
  }).then(
    (responseJSON) => {
      dispatch(getUserslist());
      dispatch(handleSuccefullyAddedUsers(responseJSON));
    }
  ).catch((err) => {
    console.log("Error During adding users list",err)
  });
}

export const handleSuccessForRevokingUserAccess = (json) => {
  return {
   type: REVOKE_USERS_SUCCESS,
   payload: json.message
 };
}

export const revokeUserAccess = (emailId) => (dispatch) => {
  const url = `${API_HOST_ROOT}/users/revoke`;
  console.log("About to call api for revoking access for useers");
  const translate = (response) => response;
  const apiData = {};
  apiData.emailId = emailId;
  const options = {
    method: "delete",
    body: JSON.stringify(apiData),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  };
  return fetch(url, options, translate).then((res) => {
     return res.json();
  }).then(
    (responseJSON) => {
      dispatch(getUserslist());
      dispatch(handleSuccefullyAddedUsers(responseJSON))
    }
  ).catch((err) => {
    console.log("Error During revoking user access",err)
  });
}


export const handleSuccessForReInvitingUserAccess = (json) => {
  return {
   type: REINVITE_USERS_SUCCESS,
   payload: json.message
 };
}

export const reInviteUserAccess = (emailId) => (dispatch) => {
  const url = `${API_HOST_ROOT}/users/reinvite`;
  console.log("About to call api for revoking access for useers");
  const translate = (response) => response;
  const apiData = {};
  apiData.emailId = emailId;
  const options = {
    method: "post",
    body: JSON.stringify(apiData),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  };
  return fetch(url, options, translate).then((res) => {
     return res.json();
  }).then(
    (responseJSON) => dispatch(handleSuccessForReInvitingUserAccess(responseJSON))
  ).catch((err) => {
    console.log("Error During revoking user access",err)
  });
}
