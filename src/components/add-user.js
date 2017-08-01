import React, { Component } from "react";
import { connect } from "react-redux";
import { ACCESSLEVELS }from "../enums/access-levels";
import { USERSSTATUS } from "../enums/users-status";
import { ACTIONTYPES } from "../enums/action-types";
import values from "lodash/values";
import { addUsers } from "../actions"

class AddUser extends Component {
  constructor(props) {
  super(props);

  this.state = {
   emailIds: '',
   role: ''
  }
 }

 handleChange = (e) => {
  let newState = {};

  newState[e.target.name] = e.target.value;

  this.setState(newState);
 };

 handleSubmit = (e, message) => {
  e.preventDefault();

  let formData = {
   emailIds: this.state.emailIds,
   role: this.state.role,
   status: USERSSTATUS.INVITED,
   actionTypes: [ACTIONTYPES.RESEND, ACTIONTYPES.REVOKEINVITE]
  }
  this.props.addUsers(formData);
  console.log("Form Data ",formData);
}

 render() {
   const accessRoles = values(ACCESSLEVELS);
   return (
     <div className="row">
       <div className="form-group col-xs-6">
         <h2>User Accounts</h2>
         <h4>Add New User(s)</h4>
       <form className="form-inline" onSubmit={this.handleSubmit}>
         <div className="input-group mb-2 mr-sm-2 mb-sm-0">
           <input type="text" className="form-control form-control-lg" placeholder="Enter one or more emails"
             name="emailIds" onChange={this.handleChange}></input>
         </div>
         <div className="input-group mb-2 mr-sm-2 mb-sm-0">
           <select name="role" className="custom-select mb-2 mr-sm-2 mb-sm-0 form-control-lg" onChange={this.handleChange}>
             <option value="Select Access" key="select">Select Access</option>
             {accessRoles.map((access, i) => <option value={access} key={i}>{access}</option>)}
           </select>

         </div>
         <button type="submit" className="btn btn-primary form-control-lg">Send Invites</button>
       </form>
     </div>
     </div>
   );
 }

}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUsers: (formData) => {
      dispatch(addUsers(formData));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
