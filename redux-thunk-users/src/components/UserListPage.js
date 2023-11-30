import React from "react";
import { connect } from "react-redux";

const UserListPage = ({ userList }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {userList?.map((user, index) => (
          <li key={index}>
            <strong>Name:</strong> {user.name}, <strong>Username:</strong>{" "}
            {user.username}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userList: state.user.userList,
  };
};

export default connect(mapStateToProps)(UserListPage);
