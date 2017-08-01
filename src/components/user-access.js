import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { revokeUserAccess, reInviteUserAccess } from "../actions"
import { ACTIONTYPES } from "../enums/action-types";

class UserAccess extends Component {


  handleRevokeAccessSubmit = (e, message) => {
   e.preventDefault();
   let emailId = "gauri@1.com";

   this.props.revokeUserAccess(emailId);
   console.log("Revoking User Access for ",JSON.stringify(e));
 }

 handleReinviteUserSubmit = (e, message) => {
  e.preventDefault();
  let emailId = "gauri@3.com";

  this.props.reInviteUserAccess(emailId);
  console.log("Resending User Access for ",message);
}
  _renderActionButtons = (actions, emailId) =>  actions.map((action, index) => {
    let dispatchCall;
    if(action === ACTIONTYPES.RESEND) {
      dispatchCall= this.handleReinviteUserSubmit;
    }
    else if( action === ACTIONTYPES.REVOKEINVITE || action === ACTIONTYPES.REVOKEACCESS) {
      dispatchCall= this.handleRevokeAccessSubmit;
    }
    return (
        <button type="button" className="btn btn-secondary text-uppercase" data={emailId} onClick={dispatchCall}>{action}</button>
    )
  });

  render() {
    const {status, emailId, accessLevel, actions} = this.props;
    const accessLevelButtonClass = accessLevel === "Full" ? "btn btn-success btn-sm" : "btn btn-warning btn-sm";
    const statusBadgeClass = status === "Invited" ? "badge badge-pill badge-invited" : "badge badge-pill badge-default"
    return (
      <tr>
        <td><span className={statusBadgeClass}>{status}</span></td>
        <td><label>{emailId}</label></td>
        <td><button type="button" className={accessLevelButtonClass}>{accessLevel}</button></td>
        <td>{this._renderActionButtons(actions, emailId)}</td>
    </tr>)
  }
}



UserAccess.propTypes = {
  status: PropTypes.string.isRequired,
  emailId: PropTypes.string.isRequired,
  accessLevel: PropTypes.string.isRequired,
  actions: PropTypes.array.isRequired
};

UserAccess.defaultProps = {

}


const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    revokeUserAccess: (emailId) => {
      dispatch(revokeUserAccess(emailId));
    },
    reInviteUserAccess: (emailId) => {
      dispatch(reInviteUserAccess(emailId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAccess);
