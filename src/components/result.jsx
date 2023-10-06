/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Result = ({ people }) => {
  return (
    <table border={1} style={{ width: "400px" }}>
      <thead>
        <tr>
          <th style={{ width: "120px" }}>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      {people.map((each, i) => {
        return (
          <tbody key={i}>
            <tr>
              <td style={{ width: "120px" }}>{each.name}</td>
              <td>{each.email}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default Result;
