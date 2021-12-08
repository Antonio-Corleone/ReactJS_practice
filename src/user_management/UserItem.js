import React, { Component } from "react";

class UserItem extends Component {
  renderUserList() {
    const { getUserItem } = this.props;
    return getUserItem.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.type}</td>
          <td>
            <button
              className="btn btn-info mr-2"
              data-toggle="modal"
              data-target="#modelIdUser"
            >
              Edit
            </button>
            <button className="btn btn-danger" onClick={() => { this.props.deleteUser(user) }}>Delete</button>
          </td>
        </tr>
      )
    })
  }
  render() {
    return (
      <>
        {this.renderUserList()}
      </>
    );
  }
}

export default UserItem;
