import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="w-60 mx-auto mt-52">
      <h1 className="text-4xl">Total User: {users.length}</h1>

      <ul>
        {users.map((person) => (
          <li className="text-xl font-bold text-green-500 mt-7" key={person._id}> 
            {person._id} - {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
