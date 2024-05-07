import React , { useState } from "react";
import "./App.css";
const App = () => {
  const [data, setdata] = useState({
    username :'',
    password :''
  })
  const {username, password} = data
  const handleChanger = e => {
    setdata({...data, [e.target.name]:[e.target.value]})
  }
  const submitHandler = e => {
    e.preventDefault()
    console.log(data)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Login Page</h1>
        <form onSubmit={submitHandler}>
          <label>Username: </label>
          <input style={{padding:'10px', margin:'10px', border:'12px'}} type="text" name="username"  value={username} onChange={handleChanger}/> <br/>
          <label>Password: </label>
          <input style={{padding: '10px', margin:'10px', border:'12px'}} type="text" name="password" value={password} onChange={handleChanger}/> <br/>
          <button style={{textAlign:'center', padding: '10px', margin:'10px', border:'12px', backgroundColor:'black', color:'white', }} type="submit" name="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;