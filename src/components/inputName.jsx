/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const InputName = ({ name, email, setName, setEmail, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a User</h2>
      <div className="name">
        <label htmlFor="">Name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          role="textbox"
        />
      </div>
      <div className="email">
        <label htmlFor="">Email</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          role="textbox"
        />
      </div>

      <button type="submit" role="button">
        Submit
      </button>
    </form>
  );
};

export default InputName;
