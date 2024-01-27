import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [firstname ,setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [displayFullname,setDisplayFullname] = useState(false);
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(firstname && lastname){
      setDisplayFullname(true);
    }else{
      setDisplayFullname(false);
    }
  }
  return (
    <div>
  <h1>Full Name Display</h1>
  <form onSubmit={handleSubmit}>
    <label for='firstName'>First Name:</label>
    <input onChange={(e)=>setFirstname(e.target.value)} value={firstname} type="text" required name='firstName'/><br/>
    <label for='lastName'>Last Name:</label>
    <input onChange={(e)=>setLastname(e.target.value)} value={lastname} type="text" required name='lastName'/><br/>
    <button type='submit'>Submit</button>
  </form>
  {displayFullname && <p>Full Name:{` ${firstname} ${lastname}`}</p>}
    </div>
  );
}

export default App;
