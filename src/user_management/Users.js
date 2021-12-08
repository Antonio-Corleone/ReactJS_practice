import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  render() {
    const {listUsers} = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <UserItem getUserItem={listUsers} deleteUser = {this.props.deleteUser}/>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
