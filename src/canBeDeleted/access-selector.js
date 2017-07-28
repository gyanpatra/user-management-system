import React from 'react';
import PropTypes from "prop-types";


const AccessSelector = ({accessRoles}) => (
  <div>
    <select name="milesSelector" className="custom-select mb-2 mr-sm-2 mb-sm-0 form-control-lg">
      <option value="Select Access" key="select">Select Access</option>
      {accessRoles.map((access, i) => <option value={access} key={i}>{access}</option>)}
    </select>
  </div>
);

AccessSelector.propTypes = {
  accessRoles: PropTypes.array.isRequired
};

AccessSelector.defaultProps = {
  accessRoles: ["full", "limited", "read-only"]
}

export default AccessSelector;
