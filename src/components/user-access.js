import React from 'react';
import PropTypes from "prop-types";


const UserAccess = ({status, emailId, accessLevel, actions}) => {
  const accessLevelButtonClass = accessLevel === "Full" ? "btn btn-success btn-sm" : "btn btn-warning btn-sm";
  const statusBadgeClass = status === "Invited" ? "badge badge-pill badge-invited" : "badge badge-pill badge-default"
  return (
    <tr>
      <td><span className={statusBadgeClass}>{status}</span></td>
      <td><label>{emailId}</label></td>
      <td><button type="button" className={accessLevelButtonClass}>{accessLevel}</button></td>
      <td>{_renderActionButtons(actions)}</td>
  </tr>)
}


const _renderActionButtons = (actions) =>  actions.map((action, index) => (
    <button type="button" className="btn btn-secondary text-uppercase">{action}</button>
));

UserAccess.propTypes = {
  status: PropTypes.string.isRequired,
  emailId: PropTypes.string.isRequired,
  accessLevel: PropTypes.string.isRequired,
  actions: PropTypes.array.isRequired
};

UserAccess.defaultProps = {

}

export default UserAccess;
