
const AddUser = () => {
  const addUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const user = { name };
    

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        e.target.reset()
      });
  };
  return (
    <div className="w-52 mx-auto mt-48">
      <form className="text-center" onSubmit={addUser}>
        <input className=" border-2 border-stone-900 p-2 " type="text" name="name" id="" placeholder="Your Name" />
        <input className=" border-2 border-stone-900 p-2 mt-8" type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;
