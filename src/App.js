import axios from 'axios';
import './App.css';
import React,{ useEffect, useState }from 'react';
import UserList from "./UserList";

function App() {

  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        
        console.log(response)
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setError(error);
      })
}, []);
  return (
    <div className="App">
      <header className="App-header">
      <h1> API UserList</h1>
      <UserList user={user}/>
      
      </header>
    </div>
  );
}

export default App;
