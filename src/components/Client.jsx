import React,{useState} from 'react'
import HistoryChart from './HistoryChart';
import ClientChart from './ClientChart';
import { useNavigate } from 'react-router-dom';



export default function Client(props) {
    const navigation =  useNavigate();
    const [fixNum, setFixNum] = useState([]);
    const [fixDet, setFixDet] = useState("");
    const [fullFix, setFullFix] = useState("");
    const [show, setShow] = useState(false);
    const [showDiv, setShowDiv] = useState(true);
    const [cost, setCost] = useState(0);
    const [time, setTime] = useState(0);
   
    const add = ()=>{
      props.getNew(fullFix,props.client)

    }

    const divShow = ()=>{
      setShowDiv(false)
    }
   

    const back= ()=>{
        navigation('/')
    };

    const insert = ()=>{
      let counter = 0;
      let element = document.getElementById("fix").value;

      props.fixes.map((fix)=>{
        if(fix.fix_code == element){
          setFixDet(fix.discription)
          setFullFix(fix)
          setCost(cost+fix.cost)
          setTime(time+fix.time)
        }
        fixNum.push([fix.fix_code])
      })
    for(let i=0; i<fixNum.length;i++){
      if(fixNum[i] == element){
        counter++
      }
    }
      if(counter == 0){
        alert("number not found")
      }
      else
      setShow(!show)
      setShowDiv(true)
    }
  return (
    <div >
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <HistoryChart client={props.client} time={time} cost={cost}/>
        <ClientChart client={props.client}/>
        <br></br>
        <br></br>
        <button onClick={insert}>insert</button> <input type="text" id="fix" placeholder='fix-number' />
        <br></br>
        <br></br>
        {show? <div>
         {showDiv? <button onClick={divShow}>{fixDet}</button>:null}
          <button onClick={add}>add</button>
        </div>:null}
        <button className='button' onClick={back}>Back to main</button>
    </div>
  )
 }

 