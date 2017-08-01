import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import get from "lodash/get";
import AddUser from "./add-user";
import UsersList from "./users-list";
import { getUserslist } from "../actions";

class App extends Component {

 constructor(props) {
    super(props);
    props.getUserslist();
  }

  render() {


    return (
      <div className="container">
        <AddUser />
        <label>My Team</label><span className="badge badge-pill badge-default">11</span>
        <UsersList />

      </div>
    );
  }
}

App.propTypes = {
  getUserslist: PropTypes.func
} ;

const mapStateToProps = (state) => {
  return {
    usersList: get(state, "usersList")
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserslist: () => {
      dispatch(getUserslist());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
