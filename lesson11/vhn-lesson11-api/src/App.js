
import './App.css';
import VhnListUser from './components/VhnListUser';
import axios from './api/vhnApi'
import { useEffect, useState } from 'react';

function App() {
  const [vhnListUser,setVhnListUser] = useState([]);

  const vhnGetAllUser = async () => {
    const vhnResponse = await axios.get("vhnUsers");
    console.log("Api Data:",vhnResponse.data);
    setVhnListUser(vhnResponse.data)
  } 

  useEffect(()=>{
    vhnGetAllUser();
    console.log("State Data:",vhnListUser);
  })
  return (
    <div className="container border my-3">
      <h1>Làm việc với MockApis</h1>
      <hr/>
      <VhnListUser renderVhnListUser = {vhnListUser} />
    </div>
  );
}

export default App;

