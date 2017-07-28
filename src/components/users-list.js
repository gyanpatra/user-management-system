import React from 'react';
import PropTypes from "prop-types";
import forEach from "lodash/forEach";
import UserAccess from "./user-access";

const UsersList = ({usersList}) => (
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

const _renderList = (usersList) =>  usersList.map((user, index) => (
    <UserAccess {...user} />
));

UsersList.propTypes = {
  usersList : PropTypes.array.isRequired
};

UsersList.defaultProps = {
  usersList: [
    {
      status: "Invited",
      emailId: "user1@gmail.com",
      accessLevel: "Limited",
      actions: ["resend","revoke invite"]
    },
    {
      status: "Active",
      emailId: "user2@gmail.com",
      accessLevel: "Full",
      actions: ["revoke access"]
    },
    {
      status: "Active",
      emailId: "user3@gmail.com",
      accessLevel: "Full",
      actions: ["revoke access"]
    } ,
    {
      status: "Active",
      emailId: "user4@gmail.com",
      accessLevel: "Limited",
      actions: ["revoke access"]
    }
  ]
}

export default UsersList;
