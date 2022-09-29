import './App.css';
import React,{useState} from 'react'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Client from './components/Client';
import Login from './components/Login';
import NewClient from './components/NewClient';

function App() {

  const [clients, setClients] = useState([]);

  const fixes = [
    {fix_code:111, discription:"motor",time:60, cost:1000},
    {fix_code:222, discription:"wheel",time:10, cost:500},
    {fix_code:333, discription:"pump",time:90, cost:800}
];
 
  const getDetails = (client)=>{
    setClients([client,...clients])
  };

const getNew = (fix,client)=>{

  clients.forEach((client1)=>{
      if(client1.name == client.name){
        client1.fix_details.push(fix)
      }
  })
console.log(clients)
}

  return (
    <div className="App">
    <Router>
      <Routes>
        
        <Route path={'/'} element={<Login clients={clients}/>} />
        {clients.map((i)=>{
          return  <Route path={`/client${i.name}`} element={<Client client={i} fixes={fixes} getNew={getNew}/>} />
        })}
        <Route path={'/newClient'} element={<NewClient getDetails={getDetails}/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
