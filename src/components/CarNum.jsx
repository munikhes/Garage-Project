import React from 'react'


export default function CarNum(props) {

  return (
   
    <React.Fragment>
        <option id="selected">{props.client.carNum}</option>
    </React.Fragment>
  )
 }