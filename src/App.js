import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);
  const addUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const user = { name };
    console.log(user);
  };

  useEffect(() => {
    fetch("http://localhost:5000/user", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((response) => response.json())
      .then((data) => {
        // const newUser = [...users, data]
        // setUsers(newUser)
      });
  }, [users]);

  return (
    <div className="App">
      <h1>Total User: {users.length}</h1>
      <form onSubmit={addUser}>
        <input type="text" name="name" id="" />
        <input type="submit" value="Add User" />
      </form>
      <ul>
        {users.map((person) => (
          <li key={person.id}>
            {" "}
            {person.id} ~ {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
