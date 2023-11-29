import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";

const UserComponent = ({ user, error, fetchUser }) => {
  return (
    <div>
      <h1>User Information</h1>
      <button onClick={fetchUser}>Load User</button>
      {error ? <p>Error: {error}</p> : null}
      {user.name ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    error: state.user.error,
  };
};

export default connect(mapStateToProps, { fetchUser })(UserComponent);
