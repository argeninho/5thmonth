import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/userActions";

const UserForm = ({ addUser }) => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    setUser({
      name: "",
      username: "",
      email: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};

export default connect(null, { addUser })(UserForm);
