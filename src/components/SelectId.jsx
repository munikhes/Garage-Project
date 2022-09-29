import React from 'react'



export default function SelectId(props) {

  console.log(props.client.id)
 
  return (
   
    <React.Fragment>
        <option id="selected">{props.client.id}</option>
    </React.Fragment>
  )
 }