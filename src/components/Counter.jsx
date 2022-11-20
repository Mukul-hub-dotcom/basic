import React from 'react'
import {useState,useEffect} from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    const [txt,setTxt]=useState('')
    const inc=()=>{
      if((count+1)%2!=0){
        setObj({msg:"It's odd"})
      }
      else{
        setObj({msg:"It's even"})
      }
      setCount(count+1)
    }
    const dec=()=>{
      if(count>0){
        if((count-1)%2!=0){
          setObj({msg:"It's odd"})
        }
        else{
          setObj({msg:"It's even"})
        }
      setCount(count-1)}
      else{
        setObj({msg:"Don't go to negative side"})
      }
    }
    const [obj,setObj]=useState({msg:"It's even"})

    // const obj={msg:"It's odd"}
    // const obj={msg:"It's even"}

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