import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function NewClient(props) {
  const navigation =  useNavigate();
  const [fullName, setfullName] = useState("");
  const [id, setId] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [car, setCar] = useState("")
  const [erorr, setErorr] = useState("")

  const getName=(e)=>{
    let name = e.target.value;
    let counter = 0;
    for(let i=0; i<name.length; i++){
      if(!isNaN(name.charAt(i))){
        counter++
      }
  
      if(counter == 0){
        setErorr("")
        setfullName(name);
      }
      else
      setErorr("wrong detail")
    }};
  const getId=(e)=>{
    let idVal = e.target.value;
    if(!isNaN(idVal) && idVal.length===9){
      setErorr("")
      setId(idVal);
    }
    else
    setErorr("wrong detail")
  };
  const getAdress=(e)=>{
    let adressVal =  e.target.value;
    setAdress(adressVal);
  };
  const getPhoneNumber=(e)=>{
    let phoneVal =  e.target.value;
    if(!isNaN(phoneVal) && phoneVal.length>7){
      setErorr("")
      setPhone(phoneVal);
    }
    else
    setErorr("wrong detail")
  };
  const getCarNumber=(e)=>{
    let carNum =  e.target.value;
    if(!isNaN(carNum)){
      setErorr("")
    setCar(carNum)
  }
  else
  setErorr("wrong detail")
  };


    const login = ()=>{
      if(fullName&&id&&adress&&phone&&car){
        props.getDetails({
          name:fullName,
          id:id,
          adress:adress,
          phone:phone,
          carNum:car,
          fix_details:[]
        })
        navigation(`/client${fullName}`)
      }
      else
      alert("wrong details")

    }
  return (
   
    <div >
      <h1>New Client</h1>
      <br></br>
      <br></br>
      <input id="fullName" type="text" placeholder='fullName' onChange={getName}/>
      {erorr}
      <br></br>
      <br></br>
      <input id="id" type="text" placeholder='id' onChange={getId}/>
      {erorr}
      <br></br>
      <br></br>
      <input  id="adress" type="text" placeholder='adress' onChange={getAdress}/>
      {erorr}
      <br></br>
      <br></br>
      <input id="PhoneNumber" type="text" placeholder='PhoneNumber' onChange={getPhoneNumber}/>
      {erorr}
      <br></br>
      <br></br>
      <input id="CarNumber" type="text" placeholder='CarNumber' onChange={getCarNumber}/>
      {erorr}
      <br></br>
      <br></br>
      <button onClick={(login)}>Login</button>
    </div>
  )
 }