import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import get from "lodash/get";
import isArray from "lodash/isArray";
import UserAccess from "./user-access";

class UsersList extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {

      return get(nextProps, "usersList",[]).length > 0
  }

  render(){
    const {usersList} = this.props;

    return (
      <table  className="table table-striped">
        <thead>
        <tr>
          <th>Status</th>
          <th>User emailId</th>
          <th>Access</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {_renderList(usersList)}
      </tbody>

      </table>
    );
  }
}


const _renderList = (usersList) =>  isArray(usersList) && usersList.map((user, index) => (
    <UserAccess {...user} key={index}/>
));

UsersList.propTypes = {
  usersList : PropTypes.array.isRequired
};

UsersList.defaultProps = {
  usersList: [

  ]
}
const mapStateToProps = (state) => {
  return {
    usersList: get(state, "usersManagement.usersList")
  };
};



export default connect(mapStateToProps, {})(UsersList);
