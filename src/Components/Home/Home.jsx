import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  const deleteUser = (id) => {
    const proceed = window.confirm("Are You Sure");
    if (proceed) {
      fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
          }
        });
    }
  };

  return (
    <div className="w-1/2 mx-auto mt-52">
      <h1 className="text-4xl">Total User: {users.length}</h1>

      <ul className="mt-7">
        {users.map((person) => (
          <li className="mt-3" key={person._id}>
            <span className="text-xl font-bold text-green-500 ">
              {person.name}{" "}
            </span>{" "}
            -<span> {person._id}</span>{" "}
            <button
              onClick={() => deleteUser(person._id)}
              className="border-2 px-2 border-slate-800 py-0"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
