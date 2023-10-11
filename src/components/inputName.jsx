/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const InputName = ({ name, email, setName, setEmail, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a User</h2>
      <div className="name">
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="email">
        <label htmlFor="email">Email</label>
        <br />
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default InputName;
