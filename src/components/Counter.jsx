import React from 'react'
import {useState,useEffect} from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    const [txt,setTxt]=useState('')
    const inc=()=>{
      setCount(count+1)
    }
    const dec=()=>{
      setCount(count-1)
    }
    const [obj,setObj]=useState({msg:"Mukul"})
    useEffect(()=>{
      console.log("Radhe")
    },[count])
    console.log("render")
    
  return (
    <div>

    <div>Counter {count} </div> 
    
    <button onClick={inc}>+1</button>
    <button onClick={dec}>-1</button>
    <h1>{obj.msg}</h1>
    <input type="text" value={txt} onChange={(e)=>setTxt(e.target.value)}/>
    
    
   </div>
    
    
  )
}

export default Counter