import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
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
    }
    const updateUser = id => {
        navigate(`/updateUser/${id}`)
    }

  return (
    <div className="w-1/2 mx-auto mt-52">
      <h1 className="text-4xl text-center">Total User: {users.length}</h1>

      <ul className="mt-7">
        {users.map((person) => (
          <li className="mt-5 border-2 py-3 text-center" key={person._id}>
            <span className="text-2xl font-bold text-cyan-500 ">
              {person.name}{" "}
            </span>{" "}
            -<span> {person._id}</span>{" "}
                <button
            onClick={() => updateUser(person._id)}        className="border-2 px-2  py-0 mr-2 bg-green-500 border-gray-300 text-white">
              Update
            </button>
            <button
              onClick={() => deleteUser(person._id)}
              className="border-2 px-2 py-0 bg-red-500 text-white border-gray-300"
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
