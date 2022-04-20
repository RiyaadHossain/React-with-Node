import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, []);
  const addUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const user = { name };
    console.log(user);
  };

  useEffect(() => {
    fetch("http://localhost:5000/users", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
  }, [user]);

  return (
    <div className="App">
      <h1>Total User: {user.length}</h1>
      <form onSubmit={addUser}>
        <input type="text" name="name" id="" />
        <input type="submit" value="Add User" />
      </form>
      <ul>
        {user.map((person) => (
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
