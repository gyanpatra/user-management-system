class UsersApi {

  getListOfUsers(){
    const request = new Request("http://dev.walmart.com:3001/api/users/addUser", {
      method: "GET"
    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  createUser(usersInfo){
    const request = new Request("http://dev.walmart.com:3001/api/users/addUser", {
      method: "POST",
      headers: new Headers({
        'Content-Type': "application/json"
      }),
      body: JSON.stringify({
        emailIds: usersInfo.emailIds,
        role: usersInfo.role
      })
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  revokeAccess(emailId){
    const request = new Request("http://dev.walmart.com:3001/api/users/revokeAccess", {
      method: "DELETE",
      headers: new Headers({
        'Content-Type': "application/json"
      }),
      body: JSON.stringify({
        emailId: emailId
      })
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  reInvite(emailId){
    const request = new Request("http://dev.walmart.com:3001/api/users/reInvite", {
      method: "POST",
      headers: new Headers({
        'Content-Type': "application/json"
      }),
      body: JSON.stringify({
        emailId: emailId
      })
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default UsersApi;
