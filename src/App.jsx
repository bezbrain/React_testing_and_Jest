/* eslint-disable no-undef */
import { useState } from "react";
import InputName from "./components/inputName";
import Result from "./components/result";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([
      ...users,
      {
        name,
        email,
      },
    ]);
  };

  return (
    <div>
      <InputName
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
      <br />
      <Result people={users} />
    </div>
  );
}
