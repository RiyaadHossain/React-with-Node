
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(json => setUser(json))
  }, [])
  return (
    <div className="App">
      <h1>Total User: {user.length}</h1>
      <ul>
        {
          user.map(person => <li key={person.id}>{person.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
