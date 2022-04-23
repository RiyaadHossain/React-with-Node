import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
    const navigate = useNavigate()
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/user/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);
  const addUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const user = { name };

    fetch(`http://localhost:5000/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        e.target.reset();
      });
      navigate('/')
      window.location.reload()
  };
  return (
      
      <div className="w-52 mx-auto mt-48">
          <h1 className="text-center mb-5 text-5xl font-bold text-green-600">{user.name}</h1>
        <form className="text-center" onSubmit={addUser}>
          <input
            className=" border-2 border-stone-900 p-2 "
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
          />
          <input
            className="  border-2 border-stone-900 p-2 mt-8"
            type="submit"
            value="Update User"
          />
        </form>
      </div>
    
  );
};

export default UpdateUser;
