
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import SelectId from './SelectId';
import CarNum from './CarNum';
export default function Login (props) {
    const navigation =  useNavigate();
    const [show, setShow] = useState(true);

    const navig = ()=>{
        navigation('/newClient')
    }
    const checked = ()=>{
        if(document.getElementById('id').checked === true){
        setShow(false)
        }
        else{
        setShow(true)
        }}
    const navigToUserId = ()=>{
         let detail = document.getElementById("selected").value;
        console.log(detail) 

        props.clients.find((client)=>{
            if(client.id == detail ){
             navigation(`/client${client.name}`)
            }
        }) 
    }
    const navigToUserCar= ()=>{
        let detail = document.getElementById("selected").value;
       console.log(detail) 
       
       props.clients.find((client)=>{
           if(client.carNum == detail ){
            navigation(`/client${client.name}`)
           }
       }) 
   }
    return (
     <div >
        <h1>SV-Garage</h1>
        <button onClick={navig}>NewClient</button>
        {show?<div>
            <select name="selectId" id="selected" onClick={navigToUserId}>
            <option id="nun"></option>
                {props.clients.map((client)=>{
                 return <SelectId client={client}/>       
                })}
            </select>
            </div>:<div>
            <select name="carNum" id="selected" onClick={navigToUserCar}>
            <option id="nun"></option>
            {props.clients.map((client)=>{
                 return <CarNum client={client}/>       
                })}
             </select>
            </div>}
        <form onClick={checked}>
        <input  name="radio" type="radio" id="id" select/>
        <label>id</label>
        <input name="radio" type="radio" id="carNum" />
        <label >CarNumber</label>
        </form>
    
        <br></br>
        <br></br>

    </div>
    )
   }