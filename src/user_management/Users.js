import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  renderUserList = () => {
    return this.props.listUsers.map((user) => {
      return (
        <UserItem
          key={user.id}
          user={user}
          deleteUser = {this.props.deleteUser}
        />
      );
    });
  };
  render() {
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
            {this.renderUserList()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
