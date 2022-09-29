import React from 'react'


export default function ClientChart(props) {
 
 
  return (
   
    <div >
    <h1>Client Details</h1>
    <table>
      <tr>
        <td>Name</td>
        <td>Id</td>
        <td>Adress</td>
        <td>Phone</td>
        <td>CarNum</td>
      </tr>
      <tbody>
     
     <React.Fragment>
     <tr>
     <td>{props.client.name}</td>
      <td>{props.client.id}</td>
      <td>{props.client.adress}</td>
      <td>{props.client.phone}</td> 
      <td>{props.client.carNum}</td> 
      </tr>
      <tr>
      </tr>
      </React.Fragment>
     
     
     </tbody>
    </table>
  </div>
  )
 }