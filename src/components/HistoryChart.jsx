import React,{useState} from 'react'


export default function HistoryChart(props) {

  // const [cost, setCost] = useState("")

const days = Math.floor(props.time/9);
const remainder = props.time % 9;

  return (
   
    <div >
    <h1>History</h1>
    <table>
      <tr>
        <td>Fix cod (#)</td>
        <td>Cost (NIS)</td>
        <td>Time (hours)</td>
      </tr>
      <tbody>
      {props.client.fix_details.map((i)=>{
      return <React.Fragment>
      <tr>
      <td>{i.fix_code}</td>
      <td>{i.cost}</td>
      <td>{i.time}</td> 
      </tr>
      </React.Fragment>
      })}
      <tr>
      </tr>
    <tr>
        <td>Total Time</td>
        <td>Total Cost</td>
    </tr>
      <td>{days}.{remainder} Days</td>
      <td>{props.cost} NIS</td>
     </tbody>
    </table>
  </div>
  )
 }

 